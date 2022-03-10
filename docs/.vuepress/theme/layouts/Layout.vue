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
      <FullsizePage v-else-if="frontmatter.pageType == 'Fullsize'" />
      <CFMMBlockPage
        :key="page.path"
        v-else-if="frontmatter.pageType == 'CFMMBlock'"
      />
      <CFMMPillarPage
        :key="page.path"
        v-else-if="frontmatter.pageType == 'CFMMPillar'"
      />
      <Page :key="page.path" v-else> </Page>
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

import Home from "../components/Home.vue";
import FullsizePage from "../components/FullsizePage.vue";
import CFMMBlockPage from "../components/CFMMBlockPage.vue";
import CFMMPillarPage from "../components/CFMMPillarPage.vue";
import Page from "../components/Page.vue";

import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { useScrollPromise } from "@vuepress/theme-default/lib/client/composables";

const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();
const page = usePageData();

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>

<style lang="scss">
@import "@vuepress/plugin-palette/palette";

.theme-container:not(.white){
  background: var(--c-cfmm-bg);
}
.theme-container {
  min-height: 100vh;
}
.sidebar {
  padding: 1rem;
  padding-bottom: 0;
  border-color: var(--c-brand-light);
}

.sidebar-items {
  background: var(--c-bg);
  border-radius: var(--c-cfmm-border-radius-lg);
  margin-top: 1rem;
  margin-left: 1rem;
}

@media (max-width: $MQMobile) {
  // reset custom styles so that the sidebar falls back nicely into the default theme
  .sidebar {
    margin: 0;
  }
}
</style>
