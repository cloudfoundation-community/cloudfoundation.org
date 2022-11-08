<template>
  <div class="pillar-category">
    <MaturityModelBlock
      v-for="item in blocks"
      :key="item.link"
      :block-data="item"
      :displayOptions="displayOptions"
      @blockHover="onBlockHover"
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
import { MaturityModelBlockHoverEvent } from "./MaturityModelBlockHoverEvent";
import { MaturityModelDisplayOptions } from "./MaturityModelDisplayOptions";

interface Props {
  pillar: Pillar;
  displayOptions: MaturityModelDisplayOptions;
}

const props = defineProps<Props>();

const cfmm = useCloudFoundationMaturityModel();

const blocks = computed(() => {
  const model = cfmm.value.pillars[props.pillar];
  if (!model) {
    throw new Error("Could not find pillar model for pillar: " + props.pillar);
  }

  const pillarBlocks = model.value.blocks;
  const opts = props.displayOptions;

  // there's only 3/5 scopes/stages so this dumb O(n) search should be ok
  return pillarBlocks.filter(
    (x) =>
      (!opts.selectedScopes || opts.selectedScopes.includes(x.scope)) &&
      (!opts.selectedStages || opts.selectedStages.includes(x.journeyStage))
  );
});

const emit = defineEmits(["blockHover"]);

function onBlockHover(event: MaturityModelBlockHoverEvent) {
  // just forward the event
  emit("blockHover", event);
}
</script>

<style lang="scss" scoped>
@import "@vuepress/plugin-palette/palette";
@import "./maturity-model";

.pillar-category {
  // the blocks can fold/expand when hovered - this means that the pillar needs be tall enough that the blocks can fill
  // the pillar without changing its outer dimensions, as this would result in re-layout of the page pushing the footer
  // further down. This looks "janky" when changing the hovered pillar. We therefore ensure that there's enough space
  // in each pillar with a spacer at the
  // on monile this does not matter much, as there's no janky hover, just "tap"
  @media (min-width: $MQMobile) {
    min-height: calc(100vh + $block-summary-max-height);
  }

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
}
</style>
