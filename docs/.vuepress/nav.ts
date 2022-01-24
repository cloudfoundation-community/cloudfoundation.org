import * as fs from "fs";
import * as path from "path";

import { index } from "./index";
import { inferPagePath, SiteLocaleConfig } from "vuepress";
import { RenderedDatabaseEntry } from "@meshcloud/notion-markdown-cms/dist/RenderedDatabaseEntry";
import { RenderedDatabasePage } from "@meshcloud/notion-markdown-cms/dist/RenderedDatabasePage"; // todo: nmdcms should export them instead of us importing them from private modules

/**
 * DESIGN:
 * Generate the navbar from the actual directory structure + the index file.
 * The advantage is that the filesystem already holds the correct hierarchical structure that we would otherwise have to copmute.
 * By also looking up in the FS structure we can have "additional pages" not sourced from notion cms.
 *
 * I have not tried this in practice though, it sounds like a good idea though to enable us to import content from meshcloud-docs
 * without importing it to notion all at once.
 */

export function getChildDirectories(path: string) {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((x) => x.isDirectory() && !x.name.startsWith("."))
    .map((x) => x.name);
}

export function getChildFiles(path: string) {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter(
      (x) => x.isFile() && !x.name.startsWith(".") && x.name.endsWith(".md")
    )
    .map((x) => x.name);
}

export function makeSidebarEntries(dir: string) {
  const children = getChildDirectories(dir).map(
    (child) => makeSidebarEntries(`${dir}/${child}`).entry[0] // ugly hack because we wrap into an array at the end...
  );

  // try to find original, "unslugged" category name, otherwise use the slugified category name
  const category = pathToCategory(dir);
  const indexItem = index.find(
    (x) => x.file && path.dirname(x.file) === dir && x.meta.category
  );
  if (!indexItem) {
    console.warn(
      "Could not find index item with category: " +
        category +
        " in dir: " +
        dir +
        ". Using category slug name instead"
    );
  }
  const categoryName = indexItem?.meta.category || category;

  const entry = [
    {
      text: categoryName,
      children: [...sortedSidebar(dir), ...children],
    },
  ];

  return { entry, text: categoryName };
}

function sortedSidebar(dir: string) {
  // stub a faked locale config, this is harcoded and only works because the size is not localized
  const locales: SiteLocaleConfig = {};
  const app: any = { siteData: { locales } };

  return getChildFiles(dir)
    .map((x) => {
      const fullPath = dir + "/" + x; // to full path, including the "docs/" prefix
      return {
        fullPath,
        indexEntry: index.find((i) => i.file === fullPath),
      };
    })
    .sort((x, y) => {
      return x.indexEntry.meta.order - y.indexEntry.meta.order;
    })
    .map((x) => ({
      text: formatTitle(x.indexEntry),
      link: inferPagePath({ app, filePathRelative: stripDocs(x.fullPath) })
        .pathInferred,
    }));
}

function stripDocs(path: string) {
  return path.substring("docs".length);
}

function pathToCategory(dir: string): string {
  const result = path.basename(dir); // by convention, the category name is reflected in the directory hierarchy

  return result;
}

function formatTitle(
  indexEntry: RenderedDatabasePage | RenderedDatabaseEntry
): any {
  // this may not be the cleanest way to detect this, with all the hardcoding going on
  // however it works and we won't need this forever
  const isBlock = indexEntry.meta["layout"] === "CFMMBlock";
  if (isBlock) {
    const rs = indexEntry.properties["redaction-state"];
    const isDraft = !rs || rs === "Draft";
    const icon = isDraft ? "🚧" : "📗";

    return icon + " " + indexEntry.meta["title"];
  }

  return indexEntry.meta["title"];
}
