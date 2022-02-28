import { defineUserConfig, ViteBundlerOptions } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress-vite";
import { visualizer } from "rollup-plugin-visualizer";
import { path, debug } from "@vuepress/utils";
import type { SidebarConfig, NavbarConfig } from "@vuepress/theme-default";

import { makeSidebarEntries } from "./nav";
import pluginMermaid from "./theme/plugins/mermaid";
import pluginPlausible from "./theme/plugins/plausible";
import pluginSitemap, {
  SitemapOptions,
} from "./theme/plugins/plugin-sitemap/src/node";

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

const sitemapOptions: SitemapOptions = {
  hostname: "https://cloudfoundation.meshcloud.io",
  excludeUrls: ["/404.html"],
  changefreq: "daily",
};
export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-US",
  title: "Cloud Foundation",
  description: "A solid foundation for your Cloud Journey",
  theme: path.resolve(__dirname, "./theme"),
  head: [
    // This list of links was given by https://favicon.io/favicon-converter/.
    // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    // <link rel="manifest" href="/site.webmanifest">
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700;900&display=swap' }],
  ],
  themeConfig: {
    logo: "/logo.png",
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
          apiHost: "",
          domain:
            process.env.CONTEXT === "production" // see https://docs.netlify.com/configure-builds/environment-variables/#build-metadat
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
    [pluginSitemap, sitemapOptions],
  ],
  bundlerConfig: {
    viteOptions: {
      plugins: [visualizer()],
    },
  },
});
