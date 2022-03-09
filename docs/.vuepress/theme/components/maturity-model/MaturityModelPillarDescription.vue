<template>
  <div class="pillar-intro mb-3 mr-2">
    <h2>{{ pillar.shortTitle }}</h2>
    <small class="d-block my-2 summary">{{ pillar.summary }}</small>
    <small class="d-block my-2"
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
.pillar-intro {
  color: white;

  height: 120px;
  
  h2 {
    font-weight: 800;
    border: none;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
  }

  .summary {
    overflow: hidden;
    height: 3rem; // 3 lines of text - no ellipsis possible unfortunately
    
  }
}
</style>
