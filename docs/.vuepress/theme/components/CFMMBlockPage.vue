<template>
  <CFMMPage>
    <template #before>
      <div class="block-intro d-flex align-items-center">
        <router-link
          :to="'/maturity-model/what-is-a-building-block#journey-stage'"
        >
          <BlockJourneyStage
            :journey-stage="frontmatter.properties['journey-stage']"
          />
        </router-link>
        <router-link :to="'/maturity-model/what-is-a-building-block#scope'">
          <BlockScope :scope="frontmatter.properties.scope" />
        </router-link>
        <span>{{ frontmatter.description }}</span>
      </div>
     
      <div class="custom-container warning" v-if="underConstruction">
        <p class="custom-container-title">
          🚧 This building block reference page is a draft.
        </p>
        <p>
          If you want to be notified when the building block reference page is
          finished, click
          <a
            href="https://webforms.pipedrive.com/f/2XgSCBA01BJiCqynYN1bKBMAdcQJVto4tNfMapytaWLX2pQD8fPPhin0iAbijt4vp"
            >here</a
          >.
        </p>
      </div>
    </template>

    <template #after>
      <h2>Related Tools</h2>

      <ul class="cards mb-4">
        <li class="cards-item" v-for="toolimpl in tools" :key="toolimpl.id">
          <div class="card">
            <div class="card-content">
              <div class="card-title">{{ toolimpl.tool }}</div>
              <p class="card-text tool-summary">
                {{ toolimpl.summary }}
              </p>
              <a class="card-btn" v-bind:href="toolimpl.link" target="_blank"
                >Learn More <ExternalLinkIcon
              /></a>
            </div>
          </div>
        </li>
      </ul>

      <p v-if="!tools.length">
        <i
          >Currently no tool implementations documented. Contributions
          welcome!</i
        >
      </p>
    </template>

    <template #right>
      <h2 class="cfmm-page-heading">Enables</h2>
      <MaturityModelRelatedBlocks :ids="frontmatter.properties.enables" />
      <h2 class="cfmm-page-heading">Depends On</h2>
      <MaturityModelRelatedBlocks :ids="frontmatter.properties['depends-on']" />
    </template>
  </CFMMPage>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import {} from "@vuepress/client";

import CFMMPage from "./CFMMPage.vue";

import BlockScope from "./block/BlockScope.vue";
import BlockJourneyStage from "./block/BlockJourneyStage.vue";
import MaturityModelRelatedBlocks from "./maturity-model/MaturityModelRelatedBlocks.vue";

import { index } from "../plugins/cfmm/shared/blocks";

function formatLink(path: string) {
  return "/" + path.replace(".md", ".html");
}

function resolveTool(id: string) {
  const page = index.find((x) => x.frontmatter.id === id);
  const tool = index.find(
    (x) => x.frontmatter.id === page.frontmatter.properties.tool[0]
  );

  return {
    id,
    summary: page.frontmatter.description,
    link: page.frontmatter.properties.link,
    tool: tool.frontmatter.title,
  };
}

const frontmatter = usePageFrontmatter<any>();

const tools = computed(() =>
  frontmatter.value.properties["tool-implementations"].map((id) =>
    resolveTool(id)
  )
);
const underConstruction = computed(
  () => frontmatter.value.properties["redaction-state"] != "mvp1"
);

import { usePlausible } from "../plugins/plausible/client";
const plausible = usePlausible();

// track the block view, with the most important properties
// note: the trackable properties can change, e.g. when routing from one block to the next
const trackableProperties = computed(() => {
  // unfortunately the computed property is still triggering when leaving the CFMMBlock layout, which means
  // that we will see the frontmatter of a different page (and with a different schema)
  // we therefore handle this here explicitly - may not be the cleanest way to do this with vue but I don't know better
  const isLeavingBlock = frontmatter.value.pageType !== "CFMMBlock";
  if (isLeavingBlock) {
    return null;
  }

  return {
    id: frontmatter.value.id,
    title: frontmatter.value?.title,
    pillar: frontmatter.value.category,
    journeyStage: frontmatter.value.properties["journey-stage"],
    scope: frontmatter.value.properties.scope,
    redactionState: frontmatter.value.properties["redaction-state"],
  };
});

watch(trackableProperties, (props) => {
  if (props) {
    plausible.value.trackEvent("block-view", { props });
  }
});
</script>

<style lang="scss" scoped>
.block-intro {
  background-color: var(--c-bg-light);
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;

  img.block-step {
    min-width: 30px;
    max-width: 30px;
  }
  img.block-scope {
    min-width: 45px;
    max-width: 45px;
    margin-right: 10px;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards-item {
  display: flex;
  margin: 1rem 1rem 0 0;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
}

.card {
  background-color: var(--c-bg-light);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.tool-summary {
  white-space: pre-line;
}

.card-btn {
  padding: 0 0.5rem;
  display: block;
  border: 1px solid;
  border-radius: 0.125rem;
  font-size: 0.875rem;
  text-align: center;
}
</style>
