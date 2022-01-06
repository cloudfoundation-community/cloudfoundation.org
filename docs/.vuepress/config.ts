import { defineUserConfig } from 'vuepress-vite';

import { path } from '@vuepress/utils';

import { makeSidebarEntries } from './nav';
import vuePressPluginMermaid from './theme/plugins/mermaid/index';

import type { DefaultThemeOptions } from "vuepress-vite";
import type { SidebarConfig, NavbarConfig } from "@vuepress/theme-default";
const sidebar: SidebarConfig = {};
const navbar: NavbarConfig = [];

// use hardcoded order of sections
const dirs = ["understanding-cloud-foundation", "maturity-model"]

dirs.forEach((dir) => {
  const link = `/${dir}/`;
  const { entry, text } = makeSidebarEntries("docs/" + dir);

  sidebar[link] = entry;
  navbar.push({ text, link });
});


console.log(JSON.stringify(sidebar, null, 2));
console.log(vuePressPluginMermaid);

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "Cloud Foundation",
  description: "A solid foundation for your Cloud Journey",
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/24991463?s=200&v=4",
    sidebar: sidebar,
    navbar: navbar,
    repo: "meshcloud/cloudfoundation",
    editLink: true,
    editLinkPattern: ":path",
    // The reason we are currently not using dark mode is because images with white backgrounds do not look nice.
    // We might be able to flip the switch back on in the future if we figure out how to handle images.
    darkMode: false
  },
  plugins: [
    vuePressPluginMermaid,
    [
      '@vuepress/plugin-search',
    ],
  ]
});
