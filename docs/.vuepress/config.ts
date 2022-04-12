import { defineUserConfig, ViteBundlerOptions } from "vuepress-vite";

import { debug, path } from "@vuepress/utils";

import { makeSidebarEntries, makeMaturityModelPageSidebarConfig } from "./nav";
import pluginMermaid from "./theme/plugins/mermaid";
import pluginPlausible from "./theme/plugins/plausible";
import pluginCfmm from "./theme/plugins/cfmm";
import pluginSitemap, {
  SitemapOptions,
} from "./theme/plugins/plugin-sitemap/src/node";

import type { DefaultThemeOptions } from "vuepress-vite";
import type { SidebarConfig, NavbarConfig } from "@vuepress/theme-default";

const log = debug("cloudfoundation:config");

const sidebar: SidebarConfig = {};
const navbar: NavbarConfig = [];

// use hardcoded order of sections
const dirs = ["understanding-cloud-foundation"];

dirs.forEach((dir) => {
  const link = `/${dir}/`;
  const { entry, text } = makeSidebarEntries("docs/" + dir);

  sidebar[link] = entry;
  navbar.push({ text, link });
});

// for the maturity model, each _page_ gets its own sidebar entry!
const mmsidebar = makeMaturityModelPageSidebarConfig();
const whatIsBuildingBlock = {
  // not proud of this hack... but it works for now. should revisit this when we add more pages under the Maturity Model. right now this is the only one
  "/maturity-model/what-is-a-building-block.html": [
    {
      text: "Maturity Model",
      link: "/maturity-model/",
      children: ["/maturity-model/what-is-a-building-block.md"],
    },
  ],
};

navbar.push({ text: "Maturity Model", link: "/maturity-model/" });
Object.assign(sidebar, mmsidebar);
Object.assign(sidebar, whatIsBuildingBlock);

log("The generated sidebar will look like the following: ");
log(JSON.stringify(sidebar, null, 2));

const sitemapOptions: SitemapOptions = {
  hostname: "https://cloudfoundation.meshcloud.io",
  excludeUrls: ["/404.html"],
};
const websiteDescription = "A solid foundation for your Cloud Journey";
export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-US",
  title: "Cloud Foundation",
  description: websiteDescription,
  theme: path.resolve(__dirname, "./theme"),
  head: [
    // This list of links was given by https://favicon.io/favicon-converter/.
    // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    // <link rel="manifest" href="/site.webmanifest">
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    // This list is for OpenGraph tags. They allow your website
    // to be rendered in a nice way when sharing on LinkedIn, Twitter & Facebook.
    ["meta", { property: "og:title", content: "Build your Cloud Foundation!" }],
    ["meta", { property: "og:description", content: websiteDescription }],
    // Note: we are required to use absolute URLs here. OpenGraph does not understand relative URLs.
    ["meta", { property: "og:image", content: "https://cloudfoundation.meshcloud.io/heroimage.png" }],
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
    pluginCfmm,
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
      "@vuepress/plugin-git",
      {
        createdTime: false,
        updateTime: true,
        contributors: false,
      },
    ],
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
});
