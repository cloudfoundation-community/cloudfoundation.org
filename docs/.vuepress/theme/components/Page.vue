<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <h1>{{ page.title }}</h1>
      <slot name="before" />
      <Content />
      <slot name="after" />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { usePageData } from "@vuepress/client";

import PageNav from "@vuepress/theme-default/lib/client/components/PageNav.vue";
import PageMeta from "@vuepress/theme-default/lib/client/components/PageMeta.vue";
import Footer from "./Footer.vue"
</script>

<style lang="scss">
main.page {
  padding-top: calc(var(--navbar-height) + 36px);
  background: #9fd9ec;

  .theme-default-content {
    background: white;
    border-radius: 12px;
    padding-top: 1px !important;
  }
}
</style>
