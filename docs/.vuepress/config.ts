import { defineUserConfig, ViteBundlerOptions } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress-vite";

import { path, debug } from "@vuepress/utils";
import type { SidebarConfig, NavbarConfig } from "@vuepress/theme-default";

import { makeSidebarEntries } from "./nav";
import pluginMermaid from "./theme/plugins/mermaid";
import pluginPlausible from "./theme/plugins/plausible";

const log = debug("cloudfoundation:config");

const sidebar: SidebarConfig = {};
const navbar: NavbarConfig = [];

// use hardcoded order of sections
const dirs = ["understanding-cloud-foundation", "maturity-model"];

dirs.forEach((dir) => {
  const link = `/${dir}/`;
  const { entry, text } = makeSidebarEntries("docs/" + dir);

  sidebar[link] = entry;
  navbar.push({ text, link });
});

log("The generated sidebar will look like the following: ");
log(JSON.stringify(sidebar, null, 2));

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-US",
  title: "Cloud Foundation",
  description: "A solid foundation for your Cloud Journey",
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/24991463?s=200&v=4",
    sidebar: sidebar,
    navbar: navbar,
    editLink: false,
    editLinkPattern: ":path",
    // The reason we are currently not using dark mode is because images with white backgrounds do not look nice.
    // We might be able to flip the switch back on in the future iPf we figure out how to handle images.
    darkMode: false,
  },
  plugins: [
    pluginMermaid,
    [
      pluginPlausible,
      {
        enableAutoPageviews: true,
        enableAutoOutboundTracking: false, // may have issue, see https://github.com/plausible/plausible-tracker/issues/12 We use custom tracking via CtaButton component instead, so this is less relevant for us.
        trackerOptions: {
          // note: when the domain is localhost, plausible automatically ignores sending events
          apiHost: "https://cloudfoundation.meshcloud.io",
          domain:
            process.env.CONTEXT !== "production" // see https://docs.netlify.com/configure-builds/environment-variables/#build-metadat
              ? "cloudfoundation.meshcloud.io"
              : "preview.cloudfoundation.meshcloud.io",
        },
      },
    ],
    ["@vuepress/plugin-search"],
    [
      // This allows us to use custom components in our markdown files.
      // Keep in mind that only components directly placed in the directory will be usable.
      // It is not possible to create a nested folder structure.
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(
          __dirname,
          "./theme/components/embeddable-components"
        ),
      },
    ],
  ],
  bundlerConfig: {},
});
