<!--
Replicate the default theme layout, but add custom page-content-before/page-content-after slots
 -->
<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <Content />
      </main>
      <Footer />
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import { usePageData} from "@vuepress/client";
import Footer from "../components/Footer.vue"

const page = usePageData();

// with a fullsize layout we never want a sidebar, so we just hack this in here
page.value.frontmatter.sidebar = false;

</script>
