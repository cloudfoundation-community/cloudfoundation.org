<template>
  <CFMMPage>
    <template #right>
      <div class="model-theme-right">
        <h2 class="cfmm-page-heading">Capabilities</h2>
        <MaturityModelPillarBlocks :pillar="pillar" />
      </div>
    </template>
  </CFMMPage>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePageData } from "@vuepress/client";

import { useCloudFoundationMaturityModel } from "../plugins/cfmm/client";
import CFMMPage from "./CFMMPage.vue";
import MaturityModelPillarBlocks from "./maturity-model/MaturityModelPillarBlocks.vue";

const page = usePageData();
const cfmm = useCloudFoundationMaturityModel();

const pillar = computed(() => {
  const title = page.value.title;
  const [currentPillar, _] = Object.entries(cfmm.value.pillars).find(
    ([key, model]) => model.value.pillar.title === title
  );

  if (!currentPillar) {
    throw new Error("Could not find pillar model for:" + title);
  }

  return currentPillar;
});
</script>

<style lang="scss">
@import "./cfmm";
</style>
