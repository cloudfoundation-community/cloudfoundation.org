<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <slot name="before" />
      <Content />
      <slot name="after" />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import PageNav from "@vuepress/theme-default/lib/client/components/PageNav.vue";
import PageMeta from "@vuepress/theme-default/lib/client/components/PageMeta.vue";
</script>
