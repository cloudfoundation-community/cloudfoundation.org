import { computed, provide } from "vue";

import type { ComputedRef, InjectionKey } from "vue";
import { MermaidApi } from "../MermaidApi";

declare const __MERMAID_OPTIONS__: any;
const options = __MERMAID_OPTIONS__;

export type MermaidRef = ComputedRef<MermaidApi>;

export const mermaidSymbol: InjectionKey<MermaidRef> = Symbol("Mermaid");

// would require asyncComputed?
// const mermaidjs = await import("mermaid");

import mermaidjs from "mermaid";


export const setupMermaid = (): void => {
  const Mermaid = computed(() => resolveMermaid());
  provide(mermaidSymbol, Mermaid);
};

function resolveMermaid(): MermaidApi {
  if (!__VUEPRESS_SSR__) {
    console.log("MERMAID INIT");
    mermaidjs.initialize({ startOnLoad: false, ...options });

    return {
      render: mermaidjs.render,
    };
  }

  return {
    render: () => {
      console.warn("Attempted to render mermaid during SSR build");
    },
  };
}
