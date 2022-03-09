<template>
  <div class="block-wrapper">
    <router-link :to="props.blockData.link" class="block-atom">
      <div class="block">
        <CFMMBlockJourneyStage class="block-step" :journey-stage="blockData.journeyStage" />
        <CFMMBlockScope class="block-scope" :scope="blockData.scope"/>
        <div class="block-content">
          <p v-text="blockData.title"></p>
        </div>
        <slot></slot>
      </div>
      <p class="tooltip-text">
        {{ shortSummary }}
      </p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

import CFMMBlockScope from "../block/CFMMBlockScope.vue";
import CFMMBlockJourneyStage from "../block/CFMMBlockJourneyStage.vue";

interface Props {
  blockData: {
    link: string;
    summary: string;
  };
}

const props = defineProps<Props>();

// we need to constrain the max-height of the summary to fit within well-defined expand/collapse beahvior.
// unfortunately we can't use css text-overflow to render ellipsis as that does not work on multi-line text
const shortSummary = computed(() => {
  const maxLength = 250;
  const text = props.blockData.summary;

  return text.length < maxLength ? text : text.substring(0, maxLength) + "...";
});
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
  margin: 0 10px 10px 0;
  padding: 8px;
  border-radius: 8px;
}
a:hover {
  text-decoration: none !important;
}
.block-atom {
  position: relative;

  .tooltip-text {
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

  // note: this is in the wrong placce because it will already expand the tooltip when hovering the block's margin
  &:hover .tooltip-text {
    max-height: $block-summary-max-height;
    opacity: 1;
    // transition: opacity 400ms 0;
  }

  .block {
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    img.block-step {
      min-width: 15px;
      max-width: 15px;
    }
    img.block-scope {
      min-width: 33px;
      max-width: 33px;
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
}
</style>
