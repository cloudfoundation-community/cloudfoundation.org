import { path } from "@vuepress/utils";
import type { App, Plugin, PluginObject } from "@vuepress/core";
import { chalk, fs, withSpinner } from "@vuepress/utils";
import { CloudFoundationMaturityModel } from "./shared/CloudFoundationMaturityModel";

export interface CfmmPluginOptions {
  hostname: string;
}
export const cfmmPlugin: Plugin<CfmmPluginOptions> = (options, app) => {
  const pluginObj: PluginObject = {
    name: "vuepress-plugin-cfmm",
    multiple: false,
    clientAppSetupFiles: path.resolve(__dirname, "./client/clientAppSetup.ts"),
    onGenerated: async () => {
      await generateBlocksJson(options as CfmmPluginOptions, app);
    },
  };

  return pluginObj;
};

export default cfmmPlugin;

/**
 * Generates a blocks.json file with metadata of all the blocks contained in the CFMM.
 * This metadata is useful for working with the structured data, e.g. generating compliance controls for the
 * meshcloud cloudfoundation toolkit (name tdb). You can think of this as a "soft API" for CFMM.
 */
async function generateBlocksJson(options: CfmmPluginOptions, app: App) {
  const hostname = options.hostname.replace(/\/$/u, "");

  const blocksFilename = "blocks.json";
  const { dir } = app;

  await withSpinner(`Generating blocks json to ${chalk.cyan(blocksFilename)}`)(
    async () => {
      const blocksJsonPath = dir.dest(blocksFilename);

      const model = new CloudFoundationMaturityModel();

      const blocks = model.blocks.value.map((x) => ({
        ...x,
        link: hostname + x.link,
      }));
      const blocksJson = JSON.stringify(blocks, null, 2);

      await fs.promises.writeFile(blocksJsonPath, blocksJson, {
        encoding: "utf-8",
      });
    }
  );
}
