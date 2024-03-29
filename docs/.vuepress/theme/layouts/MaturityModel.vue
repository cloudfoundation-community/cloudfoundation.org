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
                :size="scopeSelectOptions.length"
                multiple
              >
                <option
                  v-for="option in scopeSelectOptions"
                  :value="option.key"
                  v-bind:key="option.key"
                >
                  {{ option.value }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="selectStages">Filter by Stage</label>
              <select
                id="selectStages"
                class="custom-select custom-select-sm"
                v-model="selectedStages"
                :size="stageSelectOptions.length"
                multiple
              >
                <option
                  v-for="option in stageSelectOptions"
                  :value="option.key"
                  v-bind:key="option.key"
                  :class="'maturity-model-journey-stage-' + option.key"
                >
                  {{ option.key }} {{ option.description }}
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
                  >Show all descriptions</label
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
                  Manual filter controls</label
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
                  >Hide manually filtered</label
                >
              </div>
            </div>

            <button class="btn btn-primary" @click="resetComponentState">
              Reset
            </button>
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
              <p>Block Relationships</p>
              <div id="dependency-recommended-gradient"></div>
              <div class="d-flex justify-content-between">
                <small>Required</small>
                <small>Recommended</small>
                <small>Enabled</small>
              </div>
              <small>Tip: Hover over blocks to highlight</small>
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

import { computed, onBeforeMount, watch, watchEffect, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
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
  "knowledge",
];

const toolSelectOptions = computed(() => cfmm.value.tools);
let selectedTool = ref("");

const scopeSelectOptions = [
  { key: "core", value: "🏢 Core" },
  { key: "platform", value: "☁️ Platform" },
  { key: "lz", value: "🛬 Landing Zone" },
];
let selectedScopes = ref(scopeSelectOptions.map((x) => x.key));

// todo: this definition should live somewhere else, not in this component
const stageSelectOptions = [
  { key: "1", value: "⭐️", description: "Essential" },
  { key: "2", value: "⭐️⭐️", description: "Recommended" },
  { key: "3", value: "⭐️⭐️⭐️", description: "Best Practice" },
  { key: "4", value: "⭐️⭐️⭐️⭐️", description: "Advanced" },
  { key: "5", value: "⭐️⭐️⭐️⭐️⭐️", description: "Industry-Leading" },
];
let selectedStages = ref(stageSelectOptions.map((x) => x.key));

let showControls = ref(false);
let showDescription = ref(false);
let hideUnselected = ref(false);

function captureComponentStateForQuery() {
  return {
    selectedTool: selectedTool.value,
    selectedScopes: selectedScopes.value.join(","),
    selectedStages: selectedStages.value.join(","),
    showControls: showControls.value.toString(),
    hideUnselected: hideUnselected.value.toString(),
    showDescription: showDescription.value.toString(),
  };
}

function setComponentStateFromQuery(query: Record<string, any>) {
  selectedTool.value =
    toolSelectOptions.value.find((x) => x === query.selectedTool) ||
    selectedTool.value;

  selectedScopes.value =
    (typeof query.selectedScopes === "string" &&
      query.selectedScopes
        .split(",")
        .map((x) => scopeSelectOptions.find((opt) => x === opt.key)?.key)) ||
    selectedScopes.value;

  selectedStages.value =
    (typeof query.selectedStages === "string" &&
      query.selectedStages
        .split(",")
        .map((x) => stageSelectOptions.find((opt) => x === opt.key)?.key)) ||
    selectedStages.value;

  // all of these are false by default, so its fine we parse them from the query params when they're unset
  showControls.value = query.showControls === "true";
  hideUnselected.value = query.hideUnselected === "true";
  showDescription.value = query.showDescription === "true";
}
const defaultState = captureComponentStateForQuery();

const router = useRouter();

let didInitializeRouterStateFromLocation = false;
onBeforeMount(() => {
  // I thought I could just use useRoute().query but apparently that's not always up to date
  // this is the simplest implementation that actually works without going into deep vue lifecycle details
  let params = new URLSearchParams(window.location.search);
  const query = Object.fromEntries(params.entries());

  setComponentStateFromQuery(query);

  didInitializeRouterStateFromLocation = true;
});

// we store all copmonent state via router in query params so browser back buttons work as expected
let routerState = computed(() => captureComponentStateForQuery());

watch(routerState, () => {
  // we have to guard against updating the router state before we initially set it from the
  // window location
  if (!didInitializeRouterStateFromLocation) {
    return;
  }

  console.log(
    "replacing routerState",
    routerState.value,
    router.currentRoute.value
  );

  // we use .replace instead of .push because we want to keep only the last selection the user made in the browser history stack
  // e.g. when the user navigates to a block details page and back, but not all filter changes
  router.replace({
    path: router.currentRoute.value.path,
    query: routerState.value as any,
  });

  return routerState;
});

function resetComponentState(event: Event) {
  setComponentStateFromQuery(defaultState);
  event.preventDefault(); // i don't know why this is necessary, but otherwise vue will reload the current page
}

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

  const rs = routerState.value;
  const opts: MaturityModelDisplayOptions = {
    selectedTool: rs.selectedTool,
    selectedScopes: rs.selectedScopes
      .split(",")
      .map((x) => scopeSelectOptions.find((opt) => opt.key === x).value),
    selectedStages: rs.selectedStages
      .split(",")
      .map((x) => stageSelectOptions.find((opt) => opt.key === x).value),
    showControls: rs.showControls === "true",
    hideUnselected: rs.hideUnselected === "true",
    showDescription: rs.showDescription === "true",

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
      max-width: 16.66%; // all 6 pillars fit

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
  select {
    // this works in conjunction with explicitly set size="" attribute
    // see https://stackoverflow.com/a/32317763/125407
    overflow-y: auto;
  }

  #dependency-recommended-gradient {
    display: block;
    background: linear-gradient(
      90deg,
      $color-dependency-base,
      white,
      $color-recommended-base,
      white,
      $color-enabled-base
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
