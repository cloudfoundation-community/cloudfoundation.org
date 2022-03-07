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

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const page = usePageData();

const breadcrumbs = computed(() => {
  const parts = page.value.path.split("/");
  // Bascially if there's a trailing slash then get rid of the blank
  parts.pop();
  let link = "";
  // Loop through the crumbs
  const crumbs = parts.map((slug) => {
    link += slug;
    const page = parts.find((el) => el === link || el === link + "/");
    link += "/";
    if (page) {
      return {
        path: page.path,
        title: page.title,
      };
    } else {
      return {
        path: link,
        title: titleCase(slug),
      };
    }
  });
  return crumbs;
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
