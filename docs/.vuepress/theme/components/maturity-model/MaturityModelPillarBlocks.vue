<template>
  <div class="pillar-category">
    <MaturityModelBlock
      v-for="item in blocks"
      :key="item.link"
      :block-data="item"
    />
    <div class="spacer"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  Pillar,
  useCloudFoundationMaturityModel,
} from "../../plugins/cfmm/client";

import MaturityModelBlock from "./MaturityModelBlock.vue";

interface Props {
  pillar: Pillar;
}

const props = defineProps<Props>();
const cfmm = useCloudFoundationMaturityModel();

const blocks = computed(() => {
  const model = cfmm.value.pillars[props.pillar];
  if (!model) {
    throw new Error("Could not find pillar model for pillar: " + props.pillar);
  }
  return model.value.blocks;
});
</script>

<style lang="scss" scoped>
@import "./maturity-model";

.pillar-category {
  // the blocks can fold/expand when hovered - this means that the pillar needs be tall enough that the blocks can fill
  // the pillar without changing its outer dimensions, as this would result in re-layout of the page pushing the footer
  // further down. This looks "janky" when changing the hovered pillar. We therefore ensure that there's enough space
  // in each pillar with a spacer at the
  min-height: calc(100vh + $block-summary-max-height);
  display: flex;
  flex-direction: column;

  .spacer {
    flex: 1;
  }

  &.hidden {
    @media (max-width: 580px) {
      display: none;
    }
  }

  .title {
    margin-bottom: 0;
    text-transform: uppercase;
    color: white;
    font-size: 24px;
    font-weight: 900;
    font-family: "Montserrat", sans-serif;
    white-space: nowrap;
    @media screen and (max-width: 580px) {
      display: none;
    }
  }

  .pillar-category-mobile-intro {
    display: none;
    @media screen and (max-width: 580px) {
      display: block;
    }
  }

  p.toggle-gtn {
    margin-bottom: 24px;
    color: #1ab9de;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
