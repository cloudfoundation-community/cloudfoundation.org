import * as fs from 'fs';
import * as path from 'path';

import { index } from './index';

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
    .filter((x) =>
      x.isFile() && !x.name.startsWith(".") && x.name.endsWith(".md")
    )
    .map((x) => x.name);
}

export function makeSidebarEntries(dir: string) {
  const children = getChildDirectories(dir).map(
    (child) => makeSidebarEntries(`${dir}/${child}`).entry[0], // ugly hack because we wrap into an array at the end...
  );

  // try to find original, "unslugged" category name, otherwise use the slugified category name
  const category = pathToCategory(dir);
  const indexItem = index.find(
    (x) => x.file && path.dirname(x.file) === dir && x.meta.category,
  );
  if (!indexItem) {
    console.warn(
      "Could not find index item with category: " +
        category +
        " in dir: " +
        dir +
        ". Using category slug name instead",
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
  return getChildFiles(dir)
    .map((x) => dir + "/" + x) // to full path, including the "docs/" prefix
    .sort((x, y) => {
      const ix = index.find((i) => i.file === x);
      const iy = index.find((i) => i.file === y);

      return ix?.meta.order - iy?.meta.order;
    })
    .map((x) => stripDocs(x)) // strip the "docs" prefix
}

function stripDocs(path: string) {
  return path.substring("docs".length);
}

function pathToCategory(dir: string): string {
  const result = path.basename(dir); // by convention, the category name is reflected in the directory hierarchy

  return result;
}
