import type { ThemeObject } from "@vuepress/core";
import { path } from '@vuepress/utils';

const localTheme: ThemeObject = {
  name: "vuepress-theme-local",
  extends: "@vuepress/theme-default",
  extendsPage: (page) => {
    /**
     * Fake inject a page header for related tools
     * This is required because vuepress generates the headers when parsing markdown,
     * but we add this section to the page dynamically using a Vue component that performs a lookup against the index.
     *
     * The headers on the other hand are used to build the sidebar nav structure.
     */
    const headers = page.headers;
    if (page.frontmatter.layout === "CFMMBlock") {
      headers.push({
        title: "Related Tools",
        level: 3,
        slug: "related-tools",
        children: [],
      });
    }

    return {
      filePathRelative: page.frontmatter["url"],
      headers      
    };
  },
  layouts: {
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
    Fullsize: path.resolve(__dirname, "layouts/Fullsize.vue"),
    CFMMBlock: path.resolve(__dirname, "layouts/CFMMBlock.vue"),
  },
};

export default localTheme;
