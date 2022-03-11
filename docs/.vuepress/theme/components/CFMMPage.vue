<template>
  <main class="page model-theme">
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
import CFMMBreadcrumbs from "./CFMMBreadcrumbs.vue";

const page = usePageData();

const frontmatter = usePageFrontmatter<any>();
</script>

<style lang="scss">
@import "@vuepress/plugin-palette/palette";
@import "./cfmm";

.page {
  @media (max-width: $MQMobileNarrow) {
    padding-left: 0;
  }

  @media (max-width: $MQMobile) {
    padding-left: calc(var(--sidebar-width-mobile) + 1rem);
  }

  @media (min-width: $MQNarrow) {
    padding-left: calc(var(--sidebar-width) + 1rem);
  }
}

$model-theme-right-min-width: 240px;
main.model-theme {
  padding-top: calc(var(--navbar-height) + 2rem);
  background: var(--c-cfmm-bg);
  display: flex;

  @media (max-width: $MQNarrow + $model-theme-right-min-width) {
    flex-direction: column;
  }

  // this hosts the page content (markdown)
  .theme-default-content {
    background: white;
    border-radius: var(--c-cfmm-border-radius-lg);
    padding-top: 2.5rem;

    // reset the margin of the first paragraph, if the page starts directly with a pargraph
    > p:first-child {
      margin-top: 0;
    }
  }
}

.model-theme-center {
  padding-left: 1rem;
  @media (max-width: $MQNarrow + $model-theme-right-min-width) {
    padding-right: 1rem;
  }
  .cfmm-page-heading {
    max-width: 100%;
  }
}

.model-theme-right {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;

  flex: 1;
  max-width: $model-theme-right-min-width * 1.5;
  min-width: $model-theme-right-min-width;

  .cfmm-page-heading {
    max-width: 100%;
  }
}

.model-theme .page-meta .meta-item {
  .meta-item-info,
  .meta-item-label {
    color: white;
  }
}
</style>
