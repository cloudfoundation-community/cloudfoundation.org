<template>
  <div class="maturity-model-toolbar">
    <select v-model="selectedTool">
      <option value="">-- Evaluate a tool --</option>
      <option v-for="option in toolSelectOptions" :value="option">
        {{  option  }}
      </option>
    </select>
  </div>
  <div class="maturity-model-landing-page">
    <h1 class="maturity-model-title">Maturity Model</h1>
    <div class="card">
      <div class="card-col" v-for="pillar in pillars" :key="pillar">
        <MaturityModelPillarDescription :pillar="pillar" />
        <MaturityModelPillarBlocks :pillar="pillar" :selected-tool="selectedTool" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  useCloudFoundationMaturityModel,
} from "../../plugins/cfmm/client";
import { Pillar } from "../../plugins/cfmm/shared";
import MaturityModelPillarBlocks from "../maturity-model/MaturityModelPillarBlocks.vue";
import MaturityModelPillarDescription from "../maturity-model/MaturityModelPillarDescription.vue";

const cfmm = useCloudFoundationMaturityModel();

const pillars: Pillar[] = [
  "tenantManagement",
  "iam",
  "compliance",
  "costManagement",
  "serviceEcosystem",
];

let selectedTool = ref('');

const toolSelectOptions = computed(() => cfmm.value.tools);
</script>

<style scoped lang="scss">
@import "@vuepress/plugin-palette/palette";

.maturity-model-toolbar {
  padding: 12px 64px 0px;
  text-align: right;

  select {
    border: 0;
    font-weight: 500;
    font-family: 'Montserrat';
    padding: 2px 6px;
  }
}

.maturity-model-landing-page {
  padding: 36px 64px 24px;
  background-color: #9fd9ec;

  h1 {
    margin: 0 0 .5rem;
    font-weight: 900;
    color: white;
    display: none;
  }

  @media only screen and (max-width: $MQMobile) {
    padding: 1rem;

    h1 {
      display: block;
    }
  }

  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (min-width: $MQMobileNarrow) {

      // on desktop layout we need to add equal spacing between columns (but not on the last one!)
      .card-col:not(:last-child) {
        padding-right: 1rem;
      }
    }

    .card-col {
      flex-grow: 1;
      max-width: 20%;

      @media only screen and (max-width: 1400px) {
        min-width: 25%;
      }

      @media only screen and (max-width: 1024px) {
        min-width: 33%;
      }

      @media only screen and (max-width: 800px) {
        min-width: 50%;
      }

      @media only screen and (max-width: 580px) {
        min-width: 100%;
        border-radius: var(--c-cfmm-border-radius-lg);
        margin-bottom: 12px;
      }
    }
  }
}
</style>
