import { config as dotenv } from 'dotenv';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';

import { sync, SyncConfig } from '@meshcloud/notion-markdown-cms';
import { RenderedDatabasePage } from '@meshcloud/notion-markdown-cms/dist/RenderedDatabasePage';

dotenv();

const config: SyncConfig = {
  cmsDatabaseId: "6043a6d4-5611-4741-aa0d-1b11ec19112a",
  outDir: "docs",
  databases: {

    "6e7a1291-6f21-4979-b582-452b0158e2b2": {
      outDir: "docs/maturity-model",
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
      properties: {
        include: [
          "Name",
          "Pillar",
          "Journey Stage",
          "Scope",
          "Summary",
          "Enables",
          "Depends on",
          "Tool Implementations",
        ],
      },
      renderAs: "pages+views",
      pages: {
        frontmatter: {
          category: {
            property: "Pillar"
          },
          extra: {
            layout: "CFMMBlock",
          },
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
    "81090f8e-707a-4076-8ccf-6d58783e25cc": {
      outDir: "docs/partners",
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      renderAs: "pages+views",
      properties: {
        include: ["Name", "Category", "Specialty"],
      },
      pages: { frontmatter: { category: { property: "Category" } } },
      views: [],
    },
    "627fe3b0-0475-4f87-a37c-5136a4d00ac3": {
      outDir: "docs/tools",
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      properties: {
        include: ["Name", "Category"],
      },
      renderAs: "pages+views",
      pages: { frontmatter: { category: { property: "Category" } } },
      views: [
        {
          title: "CFMM Tools",
          properties: {
            groupBy: "Category",
          },
        },
      ],
    },
    "6f849704-d765-443f-ac32-b611fc5270cc": {
      outDir: "docs/tool-support",
      sorts: [
        {
          property: "Tool",
          direction: "ascending",
        },
      ],
      properties: {
        include: ["Name", "Block", "Tool", "Summary", "Link"],
      },
      renderAs: "table",
      entries: {
        emitToIndex: true,
      },
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

  const rendered = await sync(notionApiToken, config);

  // by convention, find all "first" files in a category and rename them README.md because vuepress expects them that way
  const categoryHomes = rendered.filter((x) => {
    const page = x as RenderedDatabasePage;
    return page.meta?.order === 0 && !!page.file;
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
    "docs/.vuepress/index.ts",
    `export const index = ${JSON.stringify(sorted, null, 2)};`
  );
}

// cannot use top-level async await, so we explicitly have to listen for and catch errors
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
