<template>
  <img class="block-scope" :src="scopeImgSrc" :alt="props.scope" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "@vuepress/client";
interface Props {
  /**
   * scope name straight out of index
   */
  scope: string;
}

const props = defineProps<Props>();

const scopeImgSrc = computed(() => {
  return scopeCubeUrl(props.scope);
});

import blue from "./scope-cube-blue.svg";
import purple from "./scope-cube-purple.svg";
// import tqblue from "./scope-cube-mix-turquoise-blue.svg";
import turquoise from "./scope-cube-turquoise.svg";

function scopeCubeUrl(scopeName): string {
  switch (scopeName) {
    case "🛬 Landing Zone":
      return turquoise;
    case "☁️ Platform":
      return purple;
    case "🏢 Core":
      return blue;
    default:
      throw `Invalid Scope Cube Value ${scopeName}`;
  }
}
</script>
