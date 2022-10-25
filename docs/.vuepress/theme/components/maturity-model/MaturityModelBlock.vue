<template>
  <div class="d-flex" v-if="!hideUnselected || selected">
    <div class="block-controls mr-2" v-if="showControls">
      <input type="checkbox" v-model="selected" />
    </div>
    <div class="block-wrapper flex-fill">
      <router-link :to="blockData.link">
        <div
          class="block-details"
          :disabled="
            !!selectedTool &&
            !props.blockData.tools.includes(props.selectedTool)
          "
        >
          <div class="block-props d-flex" @click="onPropsClick">
            <BlockJourneyStage :journey-stage="blockData.journeyStage" />
            <BlockScope :scope="blockData.scope" />
          </div>
          <div class="block-content">
            <p v-text="blockData.title"></p>
          </div>
        </div>
        <p
          class="block-summary"
          v-bind:class="{ expand: expand || showDescription }"
        >
          {{ shortSummary }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

import BlockScope from "../block/BlockScope.vue";
import BlockJourneyStage from "../block/BlockJourneyStage.vue";
import { MaturityModelBlock } from "../../plugins/cfmm/shared";
import exp from "constants";

interface Props {
  blockData: MaturityModelBlock;
  selectedTool: string;
  showControls: boolean;
  showDescription: boolean;
  hideUnselected: boolean;
}

const props = defineProps<Props>();

const selected = ref(true);

// we need to constrain the max-height of the summary to fit within well-defined expand/collapse beahvior.
// unfortunately we can't use css text-overflow to render ellipsis as that does not work on multi-line text
const shortSummary = computed(() => {
  const maxLength = 250;
  const text = props.blockData.summary;

  return text.length < maxLength ? text : text.substring(0, maxLength) + "...";
});

const expand = ref(false);

function onPropsClick(event: Event) {
  // if the device does not supports hover, expand the block summary
  // and prevent the default action (opening the link to the block details page)
  const supportsHover = window.matchMedia("(hover: hover)").matches;
  if (!supportsHover) {
    expand.value = !expand.value;
    event.preventDefault();
  }
}
</script>

<style lang="scss" scoped>
@import "./maturity-model";

h4 {
  margin-bottom: 0;
  color: #ffffff;
}
.title {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 18px;
  font-weight: 900;
}


.block-wrapper {
  background-color: white;
  margin: 0 0 10px 0;
  padding: 8px;
  border-radius: 8px;

  position: relative;

  .block-summary {
    color: black;
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    margin: 0;
    // provide a nice expand/collapse animation
    // unfortunately we can't animate the display property, so we hack aroundo this with height and opacity
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    // notes regarding choice of values: the 100ms delay gives us a "debounce" effect so that
    // animations don't start immediately
    transition: max-height 200ms 100ms;
    // some summarys may go on to long
  }

  // can probably remove the duplicate expand state css here using some scss trick I don't know about
  // expand on hover, but only on devices that natively support hover (e.g. desktops)
  @media (hover: hover) {
    &:hover .block-summary {
      max-height: $block-summary-max-height;
      opacity: 1;
    }
  }

  // expand when the block is explicitly marked as expandable
  .block-summary.expand {
    max-height: $block-summary-max-height;
    opacity: 1;
  }

  .block-details {
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    img.block-step {
      width: 16px;
      height: 48px;
    }
    img.block-scope {
      width: 32px;
      height: 48px;
      margin-right: 10px;
    }
    .block-content {
      height: 39px;
      flex-grow: 1;
      display: flex;
      align-items: center;
      text-align: left;
      p {
        font-size: 10px;
        font-weight: 700;
        color: #2d3e4f;
      }
    }
  }

  .block-details[disabled="true"] {
    img.block-step,
    img.block-scope {
      opacity: 0.5;
    }
    .block-content p {
      color: lightgrey;
    }
  }
}
</style>
