<template>
  <ParentLayout>
    <template #sidebar>
      <aside class="sidebar">
        <h2 class="sidebar-title">Explore</h2>
        <div class="maturity-model-tools">
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
              <label for="selectStages">Filter by Stage</label>
              <select
                id="selectStages"
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
      </aside>
    </template>
    <template #page>
      <div class="page">
        <div class="maturity-model-page">
          <h1 class="maturity-model-title">Maturity Model</h1>
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
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import NavbarItems from "@vuepress/theme-default/lib/client/components/NavbarItems.vue";

import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCloudFoundationMaturityModel } from "../plugins/cfmm/client";
import { Pillar } from "../plugins/cfmm/shared";
import MaturityModelPillarBlocks from "../components/maturity-model/MaturityModelPillarBlocks.vue";
import MaturityModelPillarDescription from "../components/maturity-model/MaturityModelPillarDescription.vue";

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

const scopeSelectOptions = ["🏢 Core", "☁️ Platform", "🛬 Landing Zone"];
let selectedScopes = ref([...scopeSelectOptions]);

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
  if (
    typeof selectedToolQueryParam === "string" &&
    toolSelectOptions.value.includes(selectedToolQueryParam)
  ) {
    selectedTool.value = selectedToolQueryParam;
  }
});
</script>

<style lang="scss">
@import "@vuepress/plugin-palette/palette";

// reset bottom padding to get a true full size page
.page {
  padding-bottom: 0;
}

// we have to use some custom breakpoints to make the CFMM scale nicely across the theme
// unfortunately we don't have the sidebar breakpoints as SCSS var, so we repeat what the theme does in native CSS vars instead
// and translate to px because we can't mix rem and px in a calculation
$sidebarWidth: 320px;
$CFMMLarge: 1400px + $sidebarWidth; // 4 pillars
$CFMMMedium: 1024px + $sidebarWidth; // 3 pillars
$CFMMSmall: 800px + $sidebarWidth; // 2 pilllars
$CFMMXs: 580px; // 1 pillar

.maturity-model-page {
  background-color: var(--c-cfmm-bg);

  h1 {
    margin: 0 0 0.5rem;
    font-weight: 900;
    color: white;
  }

  h2 {
    font-weight: 800;
    border: none;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
  }

  .maturity-model-title {
    // on desktop breakpoints, we have the navbar so we can hide the title
    display: none;

    // but on mobile we have no nabvar so we show it
    @media only screen and (max-width: $MQMobileNarrow) {
      display: block;
    }
  }

  padding: 2rem;
  @media only screen and (max-width: $MQMobileNarrow) {
    padding: 1rem;
  }

  .pillars {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;

    // as soon as we display more than one pillar, we need to add equal spacing between columns (but not on the last one!)
    .pillar:not(:last-child) {
      padding-right: 1rem;

      @media only screen and (max-width: $CFMMXs) {
        padding-right: 0rem;
      }
    }

    .pillar {
      flex-grow: 1;
      max-width: 20%; // all 5 pillars fit

      @media only screen and (max-width: $CFMMLarge) {
        min-width: 25%; // 4 pillars
      }

      @media only screen and (max-width: $CFMMMedium) {
        min-width: 33%; // 3 pillars
      }

      @media only screen and (max-width: $CFMMSmall) {
        min-width: 50%; // 2 pillars
      }

      @media only screen and (max-width: $CFMMXs) {
        min-width: 100%; // only one pillar
        border-radius: var(--c-cfmm-border-radius-lg);
        margin-bottom: 12px;
      }
    }
  }
}

.sidebar {
  .sidebar-title {
    color: white;
    font-weight: 800;
    border: none;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
  }

  color: var(--c-text-light);
  background-color: #b7dfec;

  padding: 2rem 1rem;
  @media only screen and (max-width: $MQMobile) {
    padding-top: calc(2rem + var(--navbar-height));
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

  // explitily size the multi selects so they don't need scrolling
  #selectScopes {
    height: calc(1.2rem * 3 + 0.5rem);
  }

  #selectStages {
    height: calc(1.2rem * 5 + 0.5rem);
  }
}
</style>
