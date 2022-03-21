<template>
  <img class="block-step" :src="stepImgSrc" :alt="props.journeyStage" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "@vuepress/client";
interface Props {
  /**
   * journeyStage name straight out of index
   */
  journeyStage: string;
}

const props = defineProps<Props>();

const stepImgSrc = computed(() => {
  return journeyStageUrl(props.journeyStage);
});

import red from "./journey-stage-1-red.svg";
import orange from "./journey-stage-2-orange.svg";
import yellow from "./journey-stage-3-yellow.svg";
import green from "./journey-stage-4-green.svg";
import blue from "./journey-stage-5-blue.svg";

function journeyStageUrl(journeyStage: string): string {
  const journeyStageValue = journeyStage.length / 2; //Each emoji length is two bytes
  switch (journeyStageValue) {
    case 1:
      return red;
    case 2:
      return orange;
    case 3:
      return yellow;
    case 4:
      return green;
    case 5:
      return blue;
    default:
      throw `Invalid Journey Stage Value ${journeyStageValue}`;
  }
}
</script>
