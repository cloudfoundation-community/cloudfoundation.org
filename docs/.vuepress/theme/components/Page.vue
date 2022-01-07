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

    <p class="footer">
      © meshcloud · All rights reserved ·
      <a href="https://www.meshcloud.io/imprint/">Imprint</a> ·
      <a href="https://www.meshcloud.io/privacy-policy/">Privacy Policy</a>
    </p>
  </main>
</template>

<script setup lang="ts">
import PageNav from "@vuepress/theme-default/lib/client/components/PageNav.vue";
import PageMeta from "@vuepress/theme-default/lib/client/components/PageMeta.vue";
</script>



<style scoped lang="scss">
.footer {
  text-align: center;
}
</style>