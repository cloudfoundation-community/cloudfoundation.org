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
  return withBase("/mm/" + journeyStageUrl(props.journeyStage));
});

function journeyStageUrl(journeyStage: string): string {
  const journeyStageValue = journeyStage.length / 2; //Each emoji length is two bytes
  let suffix = "";
  switch (journeyStageValue) {
    case 1:
      suffix = "red";
      break;
    case 2:
      suffix = "orange";
      break;
    case 3:
      suffix = "yellow";
      break;
    case 4:
      suffix = "green";
      break;
    case 5:
      suffix = "blue";
      break;
    default:
      throw `Invalid Journey Stage Value ${journeyStageValue}`;
  }
 
  return `journey-stage-${journeyStageValue}-${suffix}.svg`;
}
</script>
