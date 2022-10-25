<template>
  <div class="maturity-model-landing-page">
    <div class="pillars">
      <div class="pillar" v-for="pillar in pillars" :key="pillar">
        <MaturityModelPillarDescription :pillar="pillar" />
        <MaturityModelPillarBlocks
          :pillar="pillar"
          :selected-tool="selectedTool"
          :selected-scopes="selectedScopes"
          :selected-stages="selectedStages"
          :show-controls="showControls"
          :show-description="showDescription"
          :hide-unselected="hideUnselected"
        />
      </div>
    </div>
    <div class="tools">
      <h2>Tools</h2>

      <form>
        <div class="form-group">
          <label for="selectTool">Highlight by Tool</label>
          <select
            id="selectTool"
            class="custom-select custom-select-sm"
            v-model="selectedTool"
          >
            <option value="">-- Evaluate a tool --</option>
            <option
              v-for="option in toolSelectOptions"
              :value="option"
              v-bind:key="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="selectScopes">Filter by Scopes</label>
          <select
            id="selectScopes"
            class="custom-select custom-select-sm"
            v-model="selectedScopes"
            multiple
          >
            <option
              v-for="option in scopeSelectOptions"
              :value="option"
              v-bind:key="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="selectStage">Filter by Stage</label>
          <select
            id="selectStage"
            class="custom-select custom-select-sm"
            v-model="selectedStages"
            multiple
          >
            <option
              v-for="option in stageSelectOptions"
              :value="option"
              v-bind:key="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Filter by manual Selection</label>

          <div class="custom-control custom-switch">
            <input
              id="showControls"
              type="checkbox"
              class="custom-control-input"
              v-model="showControls"
            />
            <label for="showControls" class="custom-control-label">
              Show controls</label
            >
          </div>

          <div class="custom-control custom-switch">
            <input
              id="hideUnselected"
              type="checkbox"
              class="custom-control-input"
              v-model="hideUnselected"
            />
            <label for="hideUnselected" class="custom-control-label"
              >Hide unselected</label
            >
          </div>
        </div>
        <div class="form-group">
          <label>Advanced controls</label>
          <div class="custom-control custom-switch">
            <input
              id="showDescription"
              type="checkbox"
              class="custom-control-input"
              v-model="showDescription"
            />
            <label for="showDescription" class="custom-control-label"
              >Show Descriptions</label
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from 'vue-router';
import { useCloudFoundationMaturityModel } from "../../plugins/cfmm/client";
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

const toolSelectOptions = computed(() => cfmm.value.tools);
let selectedTool = ref("");

const scopeSelectOptions = [
  "🏢 Core",
  "☁️ Platform",
  "🛬 Landing Zone"
];
let selectedScopes = ref([...scopeSelectOptions])

const stageSelectOptions = [
  "⭐️",
  "⭐️⭐️",
  "⭐️⭐️⭐️",
  "⭐️⭐️⭐️⭐️",
  "⭐️⭐️⭐️⭐️⭐️",
];
let selectedStages = ref([...stageSelectOptions]);

let showControls = ref(false);
let showDescription = ref(false);
let hideUnselected = ref(false);

onMounted(() => {
  const selectedToolQueryParam = useRoute().query.selectedTool;
  if (typeof selectedToolQueryParam === "string" && toolSelectOptions.value.includes(selectedToolQueryParam)) {
    selectedTool.value = selectedToolQueryParam;
  }
});

</script>

<style lang="scss">
@import "@vuepress/plugin-palette/palette";

.maturity-model-toolbar {
  background-color: #b7dfec;
  padding: 0.5rem 4rem;
  text-align: right;

  select {
    max-width: 240px;
  }
  @media only screen and (max-width: $MQMobile) {
    padding: 1rem;
  }
}

.maturity-model-landing-page {
  background-color: var(--c-cfmm-bg);

  display: flex;
  flex-wrap: nowrap;

  h1 {
    margin: 0 0 0.5rem;
    font-weight: 900;
    color: white;
    display: none;
  }

  h2 {
    font-weight: 800;
    border: none;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
  }

  @media only screen and (max-width: $MQMobile) {
    padding: 1rem;

    h1 {
      display: block;
    }
  }

  .pillars {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    padding: 2rem 4rem;

    @media (min-width: $MQMobileNarrow) {
      // on desktop layout we need to add equal spacing between columns (but not on the last one!)
      .pillar:not(:last-child) {
        padding-right: 1rem;
      }
    }

    .pillar {
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

  .tools {
    h2 {
      color: white;
    }
    color: var(--c-text-light);
    background-color: #b7dfec;
    width: 280px;
    padding: 2rem;

    position: sticky;
    top: var(--navbar-height);
    height: calc(100vh - var(--navbar-height));
    overflow-y: auto;

    @media only screen and (max-width: 1800px) {
      display: none;
    }
  }
}

// manually set some bootstrap form styles, avoids importing _forms.scss from bootstrap (which is huge)
// and also we can't use its dependecy on reboot.scss either
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1rem;
}
</style>
