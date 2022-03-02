import { config as dotenv } from "dotenv";
import { promises as fs } from "fs";
import * as path from "path";
import * as rimraf from "rimraf";

import {
  RenderedDatabasePage,
  slugify,
  sync,
  SyncConfig,
  DatabasePageProperties,
} from "@meshcloud/notion-markdown-cms";

dotenv();

function commonFrontmatter(page) {
  const frontmatter: any = {
    id: page.meta.id,
    url: page.meta.url,
    title: page.meta.title,
  };
  // By this logic, you can attach a 'Summary' field to any page
  // and it will render a <meta description> tag based on the summary text.
  const summary = page.properties?.get("Summary");
  if (summary) {
    frontmatter.description = summary;
  }
  return frontmatter;
}

function buildProperties(include: string[], page: DatabasePageProperties) {
  const kvp = include.map((x) => [slugify(x), page.properties.get(x)]);
  return Object.fromEntries([...kvp]);
}

const config: SyncConfig = {
  cmsDatabaseId: "6043a6d4-5611-4741-aa0d-1b11ec19112a",
  pages: {
    destinationDirBuilder: (page) => slugify(page.properties.get("Category")),
    frontmatterBuilder: (page) => {
      const extraFrontmatter =
        page.meta.title === "Explore All Building Blocks"
          ? { layout: "Fullsize", sidebar: false }
          : {};

      return {
        ...commonFrontmatter(page),
        category: page.properties.get("Category"),
        order: page.properties.get("order"),
        ...extraFrontmatter,
      };
    },
  },

  databases: {
    "6e7a1291-6f21-4979-b582-452b0158e2b2": {
      sorts: [
        {
          property: "Pillar",
          direction: "ascending",
        },
        {
          property: "Journey Stage",
          direction: "ascending",
        },
        {
          property: "Scope",
          direction: "ascending",
        },
      ],
      renderAs: "pages+views",
      pages: {
        destinationDirBuilder: (page) =>
          "maturity-model/" + slugify(page.properties.get("Pillar")),
        frontmatterBuilder: (page) => {
          const include = [
            // order chosen here to keep code generation as close as possible to the old
            "Pillar",
            "Enables",
            "Redaction State",
            "Journey Stage",
            "Depends on",
            "Scope",
            "Tool Implementations",
            "Name",
          ];

          const properties = buildProperties(include, page);

          return {
            ...commonFrontmatter(page),
            category: page.properties.get("Pillar"),
            layout: "CFMMBlock",
            properties,
          };
        },
      },
      views: [],
    },
    "3958983e-15f0-4446-9226-6e8af5eccbc9": {
      sorts: [
        {
          property: "order",
          direction: "ascending",
        },
      ],
      renderAs: "pages+views",
      pages: {
        destinationDirBuilder: (page) =>
          "maturity-model/" + slugify(page.properties.get("Name")),
        filenameBuilder: (_) => "readme",
        frontmatterBuilder: (page) => {
          return {
            ...commonFrontmatter(page),
          };
        },
      },
      views: [],
    },
    "6f849704-d765-443f-ac32-b611fc5270cc": {
      // tool2block, part of the "tool support" page
      sorts: [
        {
          property: "Tool",
          direction: "ascending",
        },
      ],
      renderAs: "table",
      // we don't want to redner any view, just emit them to the index
      // tbd: do we need to filter properties?
      views: [],
      entries: {
        frontmatterBuilder: (page) => ({
          ...commonFrontmatter(page),
          properties: buildProperties(["Block", "Tool", "Link", "Name"], page),
        }),
      },
    },
    "627fe3b0-0475-4f87-a37c-5136a4d00ac3": {
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      renderAs: "table",
      entries: {
        frontmatterBuilder: (page) => ({
          ...commonFrontmatter(page),
        }),
      },
      views: [
        {
          title: "CFMM Tools",
          properties: {
            groupBy: "Category",
            include: ["Name", "Category"],
          },
        },
      ],
    },
  },
};

async function main() {
  const notionApiToken = process.env.NOTION_API_TOKEN;
  if (!notionApiToken) {
    throw new Error(
      "Required NOTION_API_TOKEN environment variable not provided."
    );
  }

  rimraf.sync("docs/!(README.md)**/*");

  // change into the docs dir, this simplifies handling relative paths
  process.chdir("docs/");

  const synced = await sync(notionApiToken, config);
  const rendered = synced.map((x) => {
    const page = x as RenderedDatabasePage;
    return page.file
      ? { file: page.file, frontmatter: x.frontmatter }
      : { frontmatter: x.frontmatter };
  });

  console.log("processing page 'order' conventions");
  
  // by convention, find all "first" files in a category and rename them README.md because vuepress expects them that way
  const categoryHomes = rendered.filter((x) => {
    const page = x as RenderedDatabasePage;
    return page.frontmatter?.order === 0 && !!page.file;
  });
  
  for (const home of categoryHomes) {
    const rendered = home as RenderedDatabasePage;
    const old = rendered.file;
    const readme = path.join(path.dirname(old), "readme.md");

    console.warn("renaming " + old + " -> " + readme);
    await fs.rename(old, readme);

    // patch the index, important so that it is correct for sorting
    rendered.file = readme;
  }

  // by convention, find all files with negative sort values and remove them
  // this is our hacky way to prevent publishing pages
  rendered
    .filter((x) => x.frontmatter?.order < 0 && !!x.file)
    .forEach((x) => {
      console.warn("removing " + x.file);
      fs.unlink(x.file);
    });

  // we sort the rendered pages by id, this way we have a more consistent index.ts
  // file that has less churn and thus plays along better with git versioning
  const sorted = rendered.sort((x, y) =>
    x.frontmatter.id.localeCompare(y.frontmatter.id)
  );

  console.log("writing .vuepress/index.ts");
  await fs.writeFile(
    ".vuepress/index.ts",
    `export const index = ${JSON.stringify(sorted, null, 2)};`
  );
}

// cannot use top-level async await, so we explicitly have to listen for and catch errors
main().catch((e) => {
  console.error(e);
  process.exit(1);
});