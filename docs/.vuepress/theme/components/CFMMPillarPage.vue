<template>
  <Page :modelTheme="true">
    <template #top>
      <CFMMBreadcrumbs />
    </template>

    <Feedback v-bind:page="frontmatter.title"></Feedback>
  </Page>
</template>

<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";

import Page from "./Page.vue";
import Feedback from "../components/Feedback.vue";
import CFMMBreadcrumbs from "./CFMMBreadcrumbs.vue";

const frontmatter = usePageFrontmatter<any>();
</script>

<style lang="scss">
 
</style>
