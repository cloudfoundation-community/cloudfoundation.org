<template>
  <ParentLayout>
    <template #sidebar>
      <aside class="sidebar">
        <h2 class="cfmm-pillar-heading">Explore</h2>
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
          </form>
        </div>

        <div>
          <h2 class="cfmm-pillar-heading">Expert Tools</h2>
          <form>
            <div class="form-group">
              <div class="custom-control custom-switch">
                <input
                  id="showDescription"
                  type="checkbox"
                  class="custom-control-input"
                  v-model="showDescription"
                />
                <label for="showDescription" class="custom-control-label"
                  >Show All Descriptions</label
                >
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch">
                <input
                  id="showControls"
                  type="checkbox"
                  class="custom-control-input"
                  v-model="showControls"
                />
                <label for="showControls" class="custom-control-label">
                  Filter Individual Blocks</label
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
                  >Apply Individual Filter</label
                >
              </div>
            </div>
          </form>
        </div>
        <div class="mt-auto">
          <h2 class="cfmm-pillar-heading">Legend</h2>
          <div class="maturity-model-legend">
            <div class="legend-section">
              <p>Implementation Scopes</p>
              <ul class="legend-scopes">
                <li class="d-flex align-items-center">
                  <BlockScope :scope="'🏢 Core'" /><small> Core</small>
                </li>
                <li class="d-flex align-items-center">
                  <BlockScope :scope="'☁️ Platform'" /><small>Platform</small>
                </li>
                <li class="d-flex align-items-center">
                  <BlockScope :scope="'🛬 Landing Zone'" /><small
                    >Landing Zone</small
                  >
                </li>
              </ul>
            </div>
            <div class="legend-section">
              <p>Dependencies</p>
              <div id="dependency-recommended-gradient"></div>
              <div class="d-flex justify-content-between">
                <small>Required</small>
                <small>Recommended</small>
              </div>
            </div>
          </div>
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
                :displayOptions="displayOptions"
                @blockHover="onBlockHover"
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
import { MaturityModelBlock, Pillar } from "../plugins/cfmm/shared";
import MaturityModelPillarBlocks from "../components/maturity-model/MaturityModelPillarBlocks.vue";
import MaturityModelPillarDescription from "../components/maturity-model/MaturityModelPillarDescription.vue";
import BlockScope from "../components/block/BlockScope.vue";

import { MaturityModelBlockHoverEvent } from "../components/maturity-model/MaturityModelBlockHoverEvent";
import { MaturityModelDisplayOptions } from "../components/maturity-model/MaturityModelDisplayOptions";

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

// support pre-selecting a tool by query param string
// todo: store all copmonent state via router(?) in query state params so back buttons work as expected
onMounted(() => {
  const selectedToolQueryParam = useRoute().query.selectedTool;
  if (
    typeof selectedToolQueryParam === "string" &&
    toolSelectOptions.value.includes(selectedToolQueryParam)
  ) {
    selectedTool.value = selectedToolQueryParam;
  }
});

let hoverBlock = ref<MaturityModelBlock | null>(null);

function onBlockHover(event: MaturityModelBlockHoverEvent) {
  // clear only when the leave event is for the currently highlighted block
  // this prevents UI glitches when events are processed out of order
  if (event.type === "leave" && hoverBlock.value?.id === event.block.id) {
    hoverBlock.value = null;
  } else {
    hoverBlock.value = event.block;
  }
}

let displayOptions = computed<MaturityModelDisplayOptions>(() => {
  const highlightedBlockDependencies = [];

  if (hoverBlock.value) {
    highlightedBlockDependencies.push(hoverBlock.value.dependsOn);
    const maxLevels = 5;
    for (let i = 1; i < maxLevels; i++) {
      const prevLevelIds = highlightedBlockDependencies[i - 1];
      const prevLevelBlocks = cfmm.value.queryBlocksSorted(prevLevelIds);

      highlightedBlockDependencies.push(
        prevLevelBlocks.flatMap((x) => x.dependsOn)
      );
    }
  }

  const opts: MaturityModelDisplayOptions = {
    selectedTool: selectedTool.value,
    selectedScopes: selectedScopes.value,
    selectedStages: selectedStages.value,
    showControls: showControls.value,
    hideUnselected: hideUnselected.value,
    showDescription: showDescription.value,

    highlightedBlock: hoverBlock.value,
    highlightedBlockDependencies,
  };

  return opts;
});
</script>

<style lang="scss" scoped>
@import "@vuepress/plugin-palette/palette";
@import "../components/cfmm";

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
  color: var(--c-text-light);
  background-color: #b7dfec;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: $MQMobile) {
    padding-top: calc(2rem + var(--navbar-height));
  }

  .sidebar-title {
    color: white;
    font-weight: 800;
    border: none;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
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
    height: calc(1.2rem * 3 + 0.5rem + 4px);
  }

  #selectStages {
    height: calc(1.2rem * 5 + 0.5rem + 4px);
  }

  #dependency-recommended-gradient {
    display: block;
    background: linear-gradient(
      90deg,
      $color-dependency-base,
      white,
      $color-recommended-base
    );
    height: 1rem;
    width: auto;
  }

  .legend-section {
    p {
      margin: 0 0 0.5rem;
    }
    padding-bottom: 1rem;
  }
  .legend-scopes {
    li {
      padding-left: 1rem;
    }

    img.block-scope {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
  }
}
</style>
