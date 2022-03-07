<template>
  <div class="bread-crumbs mt-3">
    <span v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
      <router-link
        :to="crumb.path"
        :class="
          crumb.path === '' ? 'bread-crumb bread-crumb-nolink' : 'bread-crumb'
        "
        >{{ crumb.title }}&nbsp;&nbsp;</router-link
      >
      <img
        src="../components/arrow-left.svg"
        v-if="index !== breadcrumbs.length - 1"
      />
      &nbsp;&nbsp;
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePageData } from "@vuepress/client";

const page = usePageData();

const breadcrumbs = computed(() => {
  const parts = page.value.path.split("/");
  console.log(parts)
  return [
    {
      path: parts.slice(0,2).join("/"),
      title: "Maturity Model"
    },
    // pillar
    {
      path: parts.slice(0,3).join("/"),
      title: page.value.frontmatter.category
    }
  ];
});
</script>

<style lang="scss" scoped>
.breadcrumb-wrapper {
  max-width: 860px;
  margin: 48px auto 0;
  color: white;
}
 

.bread-crumbs {
  padding: 1rem 0;
  color: white;
  max-width: var(--content-width);
  margin: 0 auto;
  span {
    display: inline-flex;
    align-items: center;

    a {
      color: white;
    }

    img {
      width: 12px;
    }
  }
}
</style>
