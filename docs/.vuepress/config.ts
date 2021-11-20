import { defineUserConfig } from 'vuepress-vite';

import { path } from '@vuepress/utils';

import { makeSidebarEntries } from './nav';
import vuePressPluginMermaid from './theme/plugins/mermaid/index';

import type { DefaultThemeOptions } from "vuepress-vite";
import type { SidebarConfig, NavbarConfig } from "@vuepress/theme-default";
const sidebar: SidebarConfig = {};
const navbar: NavbarConfig = [];

// use hardcoded order of sections
const dirs = ["plan", "explore", "tools", "partners"]

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
    editLinkPattern: ":path"
  },
  plugins: [
    vuePressPluginMermaid,
    [
      '@vuepress/plugin-search',
    ],
  ]
});
