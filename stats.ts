import * as CSVFormatter from "textstat/lib/src/formatter/textstat-formatter-csv";
import { Storage } from "@google-cloud/storage";

import { run } from "./.textstat/cli";
import { writeFile } from "fs/promises";
import { index } from "./docs/.vuepress/theme/plugins/cfmm/shared/blocks";
import { Parser } from "json2csv";

async function main() {
  const statsCsvPath = await writeStats();
  const pagesCsvPath = await writePages();

  await uploadFiles([statsCsvPath, pagesCsvPath]);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function writePages() {
  const pagesCsvPath = "./pages.csv";
  const pagesCsvData = formatPagesIndex();
  await writeFile(pagesCsvPath, pagesCsvData);
  return pagesCsvPath;
}

async function writeStats() {
  const results = await run({
    globPatterns: ["docs/**/*.md"],
    locale: "en"
  });

  const statsCsvPath = "./textstats.csv";
  const statsCsvData = CSVFormatter.format(results);

  await writeFile(statsCsvPath, statsCsvData);
  return statsCsvPath;
}

async function uploadFiles(paths: string[]) {
  const GOOGLE_CLOUD_PROJECT_ID = "meshcloud-data-team";
  const GOOGLE_CLOUD_BUCKET = "meshbarn-field-cfmm";
  const GOOGLE_CLOUD_KEYFILE = "./credentials.json";

  const storage = new Storage({
    projectId: GOOGLE_CLOUD_PROJECT_ID,
    keyFilename: GOOGLE_CLOUD_KEYFILE,
  });

  for (const path of paths) {
    await storage.bucket(GOOGLE_CLOUD_BUCKET).upload(path);
  }
}
export function formatPagesIndex(): string {
  const parser = new Parser({
    flatten: true,
    flattenSeparator: "_",
  });
  
  return parser.parse(index);
}
