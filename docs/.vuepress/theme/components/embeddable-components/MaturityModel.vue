<template>
  <div class="maturity-model-landing-page">
    <h1 class="maturity-model-title">Maturity Model</h1>
    <div class="card">
      <div class="card-col" v-for="pillar in pillars" :key="pillar">
        <MaturityModelPillarDescription :pillar="pillar" />
        <MaturityModelPillarBlocks :pillar="pillar" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pillar } from "../../plugins/cfmm/shared";
import MaturityModelPillarBlocks from "../maturity-model/MaturityModelPillarBlocks.vue";
import MaturityModelPillarDescription from "../maturity-model/MaturityModelPillarDescription.vue";

const pillars: Pillar[] = [
  "tenantManagement",
  "iam",
  "compliance",
  "costManagement",
  "serviceEcosystem",
];
</script>

<style scoped lang="scss">
.maturity-model-landing-page {
  padding: 48px 64px 24px;
  background-color: #9fd9ec;

  h1 {
    margin: 0 0 8px;
    font-weight: 900;
    color: white;
    display: none;
  }

  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &.mobile-wrap {
      @media screen and (max-width: 580px) {
        flex-wrap: nowrap;
        overflow-x: auto;
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
        border-radius: 12px;
        margin-bottom: 12px;
      }
    }
  }

  @media only screen and (max-width: 580px) {
    padding-left: 25px;
    padding-right: 15px;
    h1 {
      display: block;
    }
  }
}
</style>
