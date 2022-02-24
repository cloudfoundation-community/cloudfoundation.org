import { config as dotenv } from "dotenv";
import { promises as fs } from "fs";
import * as path from "path";
import * as rimraf from "rimraf";

import {
  RenderedDatabasePage,
  slugify,
  sync,
  SyncConfig,
} from "@meshcloud/notion-markdown-cms";
import { DatabasePageProperties } from "@meshcloud/notion-markdown-cms/dist/DatabasePageProperties";

dotenv();

function commonFrontmatter(page) {
  return {
    id: page.meta.id,
    url: page.meta.url,
    title: page.meta.title,
  };
}

function buildProperties(include: string[], page: DatabasePageProperties) {
  const kvp = include.map((x) => [slugify(x), page.properties.get(x)]);
  return Object.fromEntries([...kvp]);
}

const config: SyncConfig = {
  cmsDatabaseId: "6043a6d4-5611-4741-aa0d-1b11ec19112a",
  pages: {
    destinationDirBuilder: (page) => slugify(page.properties.get("Category")),
    frontmatterBuilder: (page) => ({
      ...commonFrontmatter(page),
      category: page.properties.get("Category"),
      order: page.properties.get("order"),
    }),
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
            "Summary",
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
      views: [
        {
          title: "By Pillar",
          properties: {
            groupBy: "Pillar",
            include: ["Name", "Scope", "Journey Stage", "Summary"],
          },
        },
        {
          title: "By Journey Stage",
          properties: {
            groupBy: "Journey Stage",
            include: ["Name", "Scope", "Pillar", "Summary"],
          },
        },
      ],
    },
    "6f849704-d765-443f-ac32-b611fc5270cc": {
      // tool2block, part of the "tool support" page
      sorts: [
        {
          property: "Tool",
          direction: "ascending",
        },
      ],
      // note: support for properties filterins missing here, do we need to add this back? make it look like views[] for pages+views?
      // properties: {
      //   include: ["Name", "Block", "Tool", "Summary", "Link"],
      // },
      renderAs: "table",
      entries: {
        emitToIndex: true,
      },
    },
    "627fe3b0-0475-4f87-a37c-5136a4d00ac3": {
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      renderAs: "pages+views",
      pages: {
        destinationDirBuilder: (page) =>
          "tools/" + slugify(page.properties.get("Category")),
        frontmatterBuilder: (page) => ({
          ...commonFrontmatter(page),
          category: page.properties.get("Category"),
          order: page.properties.get("order"),
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

  const rendered = await sync(notionApiToken, config);

  // by convention, find all "first" files in a category and rename them README.md because vuepress expects them that way
  const categoryHomes = rendered.filter((x) => {
    const page = x as RenderedDatabasePage;
    return page.properties?.get("order") === 0 && !!page.file;
  });

  for (const home of categoryHomes) {
    const rendered = home as RenderedDatabasePage;
    const old = rendered.file;
    const readme = path.join(path.dirname(old), "readme.md");

    console.log("renaming " + old + " -> " + readme);
    await fs.rename(old, readme);

    // patch the index, important so that it is correct for sorting
    rendered.file = readme;
  }

  // we sort the rendered pages by id, this way we have a more consistent index.ts
  // file that has less churn and thus plays along better with git versioning
  const sorted = rendered.sort((x, y) => x.meta.id.localeCompare(y.meta.id));

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
