<template>
  <main class="page" v-bind:class="{ 'model-theme': props.modelTheme }">
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
  </main>
    <Footer />
</template>

<script setup lang="ts">
import { usePageData } from "@vuepress/client";

import PageNav from "@vuepress/theme-default/lib/client/components/PageNav.vue";
import PageMeta from "@vuepress/theme-default/lib/client/components/PageMeta.vue";
import Footer from "./Footer.vue";

const page = usePageData();

interface Props {
  modelTheme: boolean;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
main.model-theme {
  padding-top: calc(var(--navbar-height) + 36px);
  background: #9fd9ec;

  .theme-default-content {
    background: white;
    border-radius: 12px;
    padding-top: 1px !important;
  }
}

.model-theme .page-meta .meta-item {
  .meta-item-info,
  .meta-item-label {
    color: white;
  }
}
</style>
