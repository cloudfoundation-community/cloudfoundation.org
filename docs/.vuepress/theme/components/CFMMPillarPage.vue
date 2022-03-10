<template>
  <CFMMPage>
    <template #right>
      <h2 class="cfmm-page-heading">Building Blocks</h2>
      <MaturityModelPillarBlocks :pillar="'iam'" />
    </template>
  </CFMMPage>
</template>

<script setup lang="ts">
import CFMMPage from "./CFMMPage.vue";
import MaturityModelPillarBlocks from "./maturity-model/MaturityModelPillarBlocks.vue";
</script>

<style lang="scss">
@import "./cfmm";

</style>
