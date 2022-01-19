<template>
  <Layout>
    <template #page-before>
      <p>
        {{ frontmatter.properties.scope }} /
        {{ frontmatter.properties.pillar }} /
        {{ frontmatter.properties["journey-stage"] }}
      </p>
      <div class="custom-container tip">
        <p class="custom-container-title">Summary</p>
        <p>{{ frontmatter.properties.summary }}</p>
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

    <template #page-after>
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

      <Feedback v-bind:page="frontmatter.title" v-if="!underConstruction"></Feedback>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import { computed, watch } from "vue";
import { index } from "../../index";
import Feedback from '../components/Feedback.vue';

function formatLink(path: string) {
  return path.substring("docs".length).replace(".md", ".html");
}

// todo: all these O(n) searches against the index are bad, we should probably wrap that in a better structure
// or even better - a service/mixin
function resolvePage(id: string) {
  const page = index.find((x) => x.meta.id === id);
  return {
    id,
    title: page.meta.title,
    href: formatLink(page.file),
  };
}

function resolveTool(id: string) {
  const page = index.find((x) => x.meta.id === id);
  const tool = index.find((x) => x.meta.id === page.properties.tool[0]);

  return {
    id,
    summary: page.properties.summary,
    link: page.properties.link,
    tool: tool.meta.title,
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
    frontmatter.value.properties["redaction-state"] === undefined ||
    frontmatter.value.properties["redaction-state"] === "Draft"
);

import { usePlausible } from "../plugins/plausible/client";
const plausible = usePlausible();

// track the block view, with the most important properties
// note: the trackable properties can change, e.g. when routing from one block to the next
const trackableProperties = computed(() => ({
  id: frontmatter.value.id,
  title: frontmatter.value.title,
  pillar: frontmatter.value.properties.pillar,
  journeyStage: frontmatter.value.properties["journey-stage"],
  scope: frontmatter.value.properties.scope,
  redactionState: frontmatter.value.properties["redaction-state"]
}));

watch(trackableProperties, (props) => {
  plausible.value.trackEvent("block-view", { props });
});
</script>

<script lang="ts">
import Layout from "./Layout.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
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
