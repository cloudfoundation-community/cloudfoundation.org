<!--
Replicate the default theme layout, but add custom page-content-before/page-content-after slots
 -->
<template>
  <ParentLayout>
    <!-- override the page template slot in the default layout -->
    <template #page>
      <Home v-if="frontmatter.home" />
      <FullsizePage v-else-if="frontmatter.pageType == 'Fullsize'" />
      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <CFMMBlockPage :key="page.path" v-if="frontmatter.pageType == 'CFMMBlock'" />
        <Page :key="page.path" v-else>
        </Page>
      </Transition>
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

import Home from "../components/Home.vue";
import FullsizePage from "../components/FullsizePage.vue"
import CFMMBlockPage from "../components/CFMMBlockPage.vue"
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
