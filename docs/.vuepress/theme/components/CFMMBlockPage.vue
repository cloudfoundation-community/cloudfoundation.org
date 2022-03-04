<template>
  <Page>
    <template #before>
      <p>
        {{ frontmatter.properties.scope }} /
        {{ frontmatter.category }} /
        {{ frontmatter.properties["journey-stage"] }}
      </p>
      <div class="custom-container tip">
        <p class="custom-container-title">Summary</p>
        <p>{{ frontmatter.description }}</p>
      </div>

      <nav v-if="dependsOn.length">
        <b>Depends on: </b>
        <span class="depends" v-for="link in dependsOn" :key="link.id"
          ><router-link
            :to="link.href"
            class="nav-link"
            aria-label="{{link.title}}"
          >
            {{ link.title }}
          </router-link>
          &nbsp;
        </span>
      </nav>
      <nav v-if="enables.length">
        <b>Enables: </b>
        <span class="enables" v-for="link in enables" :key="link.id"
          ><router-link
            :to="link.href"
            class="nav-link"
            aria-label="{{link.title}}"
          >
            {{ link.title }}
          </router-link>
          &nbsp;
        </span>
      </nav>

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

      <Feedback
        v-bind:page="frontmatter.title"
        v-if="!underConstruction"
      ></Feedback>
    </template>
  </Page>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { usePageFrontmatter } from "@vuepress/client";
import Page from "./Page.vue";
import Feedback from "./Feedback.vue";
import { index } from "../../index";

function formatLink(path: string) {
  return "/" + path.replace(".md", ".html");
}

// todo: all these O(n) searches against the index are bad, we should probably wrap that in a better structure
// or even better - a service/mixin
function resolvePage(id: string) {
  const page = index.find((x) => x.frontmatter.id === id);
  return {
    id,
    title: page.frontmatter.title,
    href: formatLink(page.file),
  };
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
const dependsOn = computed(() =>
  frontmatter.value.properties["depends-on"].map((id) => resolvePage(id))
);
const enables = computed(() =>
  frontmatter.value.properties["enables"].map((id) => resolvePage(id))
);
const tools = computed(() =>
  frontmatter.value.properties["tool-implementations"].map((id) =>
    resolveTool(id)
  )
);
const underConstruction = computed(
  () =>
    frontmatter.value.properties["redaction-state"] != "mvp1"
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
    title: frontmatter.value.title,
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
