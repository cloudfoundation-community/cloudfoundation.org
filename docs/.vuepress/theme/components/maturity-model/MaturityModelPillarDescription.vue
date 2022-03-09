<template>
  <div class="mobile-intro mb-3 mr-2">
    <h2>{{ pillar.shortTitle }}</h2>
    <small>{{ pillar.summary }}</small>
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
.mobile-intro {
  height: 140px;

  h2 {
    font-weight: 800;
    color: white;
    border: none;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
  }
}
</style>
