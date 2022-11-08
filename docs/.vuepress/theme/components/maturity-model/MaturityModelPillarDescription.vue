<template>
  <div class="pillar-intro mb-3 mr-2">
    <h2 class="cfmm-pillar-heading">{{ pillar.shortTitle }}</h2>
    <small class="d-block my-2 summary">{{ pillar.summary }}</small>
    <small class="d-block my-2 more"
      ><router-link :to="pillar.link">Learn More</router-link></small
    >
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

const pillar = computed(() => {
  return cfmm.value.pillars[props.pillar].value.pillar;
});
</script>

<style scoped lang="scss">
@import "../cfmm";

.pillar-intro {
  color: white;

  height: 120px;

  .summary {
    overflow: hidden;
    height: 3rem; // 3 lines of text - no ellipsis possible unfortunately
  }

  .more a {
    color: #505152; // a designer may pick a better color, but we need something with sufficient contrast
  }
}
</style>
