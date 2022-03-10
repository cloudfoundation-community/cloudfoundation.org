<template>
  <main class="page model-theme">
    <div class="model-theme-left">
      <slot name="left" />
    </div>

    <div class="model-theme-center">
      <CFMMBreadcrumbs />
      <h1 class="cfmm-page-heading">{{ page.title }}</h1>
      <div class="theme-default-content">
        <slot name="before" />
        <Content />
        <slot name="after" />
        <Feedback :page="frontmatter.title"></Feedback>
      </div>
      <PageMeta />
      <PageNav />
    </div>

    <div class="model-theme-right">
      <slot name="right" />
    </div>

    <slot name="bottom" />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import { usePageData } from "@vuepress/client";
import { usePageFrontmatter } from "@vuepress/client";

import PageNav from "@vuepress/theme-default/lib/client/components/PageNav.vue";
import PageMeta from "@vuepress/theme-default/lib/client/components/PageMeta.vue";
import Footer from "./Footer.vue";
import Feedback from "./Feedback.vue";
import CFMMBreadcrumbs from "./CFMMBreadcrumbs.vue"

const page = usePageData();

const frontmatter = usePageFrontmatter<any>();
</script>

<style lang="scss">
@import "./cfmm";

main.model-theme {
  padding-top: calc(var(--navbar-height) + 36px);
  background: #9fd9ec;
  display: flex;


  .theme-default-content {
    background: white;
    border-radius: 12px;
    padding-top: 2.5rem;

    > p:first-child {
      margin-top: 0;
    }
  }
}

.model-theme-left {
  width: 240px;
}

.model-theme-right {
  padding-top: 2rem;
  padding-left: 1rem;
  width: 350px;
}

.model-theme .page-meta .meta-item {
  .meta-item-info,
  .meta-item-label {
    color: white;
  }
}
</style>
