<!--
Replicate the default theme layout, but add custom page-content-before/page-content-after slots
 -->
<template>
  <ParentLayout>
    <!-- override the page template slot in the default layout -->
    <template #sidebar-top>
      <h2 class="cfmm-page-heading">Content</h2>
    </template>
    <template #page>
      <Home v-if="frontmatter.home" />
      <Events v-else-if=" frontmatter.category == 'Events' && frontmatter.order == 0" />
      <Resources v-else-if=" frontmatter.category == 'Resources' && frontmatter.order == 0" />
      <OpenSourceTools v-else-if=" frontmatter.category == 'Open Source Tools' && frontmatter.order == 0" />
      <About v-else-if="frontmatter.category == 'About' && frontmatter.order == 0" />
      <CFMMBlockPage
        :key="page.path"
        v-else-if="frontmatter.pageType == 'CFMMBlock'"
      />
      <CFMMPillarPage
        :key="page.path"
        v-else-if="frontmatter.pageType == 'CFMMPillar'"
      />
      <CFMMPage :key="page.path" v-else> </CFMMPage>
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

import Home from "../components/home/Home.vue";
import Events from "../components/events/Events.vue";
import Resources from "../components/resources/Resources.vue";
import OpenSourceTools from "../components/open-source-tools/OpenSourceTools.vue";
import About from "../components/about/About.vue";
import CFMMPage from "../components/CFMMPage.vue";
import CFMMBlockPage from "../components/CFMMBlockPage.vue";
import CFMMPillarPage from "../components/CFMMPillarPage.vue";

import { usePageData, usePageFrontmatter } from "@vuepress/client";

const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();
const page = usePageData();
</script>

<style lang="scss">
@import "@vuepress/plugin-palette/palette";

@media (max-width: $MQMobile) {
  .sidebar {
    .cfmm-page-heading {
      display: none;
    }
  }
}
</style>
