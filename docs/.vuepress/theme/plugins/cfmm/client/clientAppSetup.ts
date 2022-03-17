import { defineClientAppSetup } from '@vuepress/client';
import { setupCloudFoundationMaturityModel } from './composables';

export default defineClientAppSetup(() => {
  setupCloudFoundationMaturityModel();
});
