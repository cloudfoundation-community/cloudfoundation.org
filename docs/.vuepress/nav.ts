import * as fs from "fs";
import * as path from "path";

import { index } from "./index";
import { inferPagePath, SiteLocaleConfig } from "vuepress";
import { RenderedDatabaseEntry } from "@meshcloud/notion-markdown-cms/dist/RenderedDatabaseEntry";
import { RenderedDatabasePage } from "@meshcloud/notion-markdown-cms/dist/RenderedDatabasePage"; // todo: nmdcms should export them instead of us importing them from private modules

function lookupPagePath(relativePath: string) {
  // stub a faked locale config, this is harcoded and only works because the size is not localized
  const locales: SiteLocaleConfig = {};
  const app: any = { siteData: { locales } };

  return inferPagePath({ app, filePathRelative: relativePath }).pathInferred;
}

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
  const readmePath = `${dir}/readme.md`;
  const hasReadme = fs.existsSync(readmePath);

  // try to find original, "unslugged" category name, otherwise use the slugified category name
  const category = pathToCategory(dir);
  const strippedDir = stripDocs(dir);
  const indexItem = index.find(
    (x) =>
      x.file && path.dirname(x.file) === strippedDir && x.frontmatter.category
  );
  if (!indexItem) {
    console.warn(
      `Could not find index item to determine category name for dir: ${dir}. Using category slug ${category} instead`
    );
  }
  const categoryName = indexItem?.frontmatter.category || category;

  // sidebar entries for children directories
  const childDirs = getChildDirectories(dir).map(
    (child) => makeSidebarEntries(`${dir}/${child}`).entry[0] // ugly hack because we wrap into an array at the end...
  );

  // docs that are direct children of this directory
  const childDocs = sortedSidebar(dir).filter(
    (x) => x.text !== categoryName // filter "reamde.md" links, otherwise we have it both as a category as well as a child item
  );

  const entry = [
    {
      text: categoryName,
      children: [...childDocs, ...childDirs],
      link: hasReadme ? lookupPagePath(stripDocs(readmePath)) : undefined, // add a link fot the readme.md if we have one for this directory
    },
  ];

  return { entry, text: categoryName };
}

function sortedSidebar(dir: string) {
  return getChildFiles(dir)
    .map((x) => {
      const relativePath = stripDocs(dir + "/" + x); // to relative path
      return {
        relativePath: relativePath,
        indexEntry: index.find((i) => i.file === relativePath),
      };
    })
    .sort((x, y) => {
      return x.indexEntry?.frontmatter.order - y.indexEntry?.frontmatter.order;
    })
    .map((x) => {
      return {
        text: formatTitle(x.indexEntry),
        link: lookupPagePath(x.relativePath),
      };
    });
}

function stripDocs(path: string) {
  return path.substring("docs/".length);
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
  const isBlock = indexEntry?.frontmatter.pageType === "CFMMBlock";
  if (isBlock) {
    const rs = indexEntry.frontmatter.properties["redaction-state"];
    const isDraft = !rs || rs === "Draft";
    const icon = isDraft ? "🚧" : "📗";

    return icon + " " + indexEntry?.frontmatter["title"];
  }

  return indexEntry?.frontmatter["title"];
}
