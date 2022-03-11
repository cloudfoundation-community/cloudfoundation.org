<template>
  <div class="bread-crumbs">
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

  if (parts[1] === "maturity-model") {
    return [
      // root
      {
        path: parts.slice(0, 2).join("/"),
        title: "Maturity Model",
      },
      // pillar
      {
        path: parts.slice(0, 3).join("/") + "/", // pillars always need a trailing slash
        title: page.value.frontmatter.category,
      },
    ];
  }

  return [
    // category
    {
      path: parts.slice(0, 3).join("/"),
      title: page.value.frontmatter.category,
    },
  ];
});
</script>

<style lang="scss" scoped>
.bread-crumbs {
  padding-bottom: 1rem;
  color: white;
  max-width: var(--content-width);
  height: 2rem;
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
