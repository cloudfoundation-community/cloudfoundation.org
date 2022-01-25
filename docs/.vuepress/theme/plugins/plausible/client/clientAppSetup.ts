import { defineClientAppSetup } from "@vuepress/client";
import { setupPlausible } from "./composables/setupPlausible";

export default defineClientAppSetup(() => {
  if (__VUEPRESS_SSR__) {
    // plausible uses quite a few DOM API, so we can't use it in a node env
    return;
  }

  setupPlausible();
});
