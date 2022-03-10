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
  return withBase('/mm/' + scopeCubeFilename(props.scope));
});

function scopeCubeFilename(scopeName): string {
    const prefix = "scope-cube-";
    switch (scopeName) {
      case "🛬 Landing Zone":
        return `${prefix}turquoise.svg`;
      case "☁️ Platform":
        return `${prefix}purple.svg`;
      case "🏢 Core":
        return `${prefix}blue.svg`;
      default:
        throw `Invalid Scope Cube Value ${scopeName}`;
    }
  }
</script>
