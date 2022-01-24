<template>
  <a v-bind:href="urlWithTags" v-on:click="onClick" class="btn mr-2 mb-1">
    <slot></slot> →
  </a>
</template>

<script setup lang="ts">
import { usePlausible } from "../../plugins/plausible/client";
import { computed, useSlots } from "vue";
import { usePageFrontmatter } from "@vuepress/client";

interface Props {
  url: string;
}

const plausible = usePlausible();
const slots = useSlots();
const props = defineProps<Props>();
const frontmatter = usePageFrontmatter<any>();

// see https://stackoverflow.com/a/64167032/125407
const getSlotChildrenText = (children) =>
  children
    .map((node) => {
      if (!node.children || typeof node.children === "string")
        return node.children || "";
      else if (Array.isArray(node.children))
        return getSlotChildrenText(node.children);
      else if (node.children.default)
        return getSlotChildrenText(node.children.default());
    })
    .join("");

const buttonText =
  (slots.default && getSlotChildrenText(slots.default())) || "";

const pageTitle = frontmatter.value.title;

const urlWithTags = computed(() => {
  const url = new URL(props.url);
  const sp = url.searchParams;
  sp.append("utm_source", "cfmm");
  sp.append("utm_medium", "web");
  sp.append("utm_campaign", "cta");
  sp.append("utm_content", buttonText);
  sp.append("utm_term", pageTitle);

  return url.toString();
});

function onClick() {
  plausible.value.trackEvent("cta-click", {
    props: { target: props.url, buttonText: buttonText, pageTitle: pageTitle },
  });
}
</script>

<style scoped lang="scss"></style>
