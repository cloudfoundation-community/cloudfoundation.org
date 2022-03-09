import { path } from "@vuepress/utils";
import type { Plugin, PluginObject } from "@vuepress/core";

export const cfmmPlugin: Plugin<never> = (options) => {
  const pluginObj: PluginObject = {
    name: "vuepress-plugin-cfmm",
    multiple: false,
    clientAppSetupFiles: path.resolve(__dirname, "./client/clientAppSetup.ts"),
  };

  return pluginObj;
};

export default cfmmPlugin;
