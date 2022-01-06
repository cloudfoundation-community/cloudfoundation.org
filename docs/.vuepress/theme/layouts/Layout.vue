<!--
Replicate the default theme layout, but add custom page-content-before/page-content-after slots
 -->
<template>
  <Layout>
    <template #page>
      <Home v-if="frontmatter.home" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #before>
            <h1>{{ page.title }}</h1>
            <slot name="page-before" />
          </template>
          <template #after>
            <slot name="page-after" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </template>
  </Layout>
</template>

<script setup lang="ts">
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

<script lang="ts">
import Home from "../components/Home.vue";
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

export default {
  components: {
    Layout,
    Home,
  },
};
</script>

<style lang="css"></style>
