import { computed, provide } from 'vue';

import type { ComputedRef, InjectionKey } from "vue";
import { CloudFoundationMaturityModel } from '../../shared';

export type CloudFoundationMaturityModelRef = ComputedRef<CloudFoundationMaturityModel>;

export const cfmmSymbol: InjectionKey<CloudFoundationMaturityModelRef> = Symbol("cfmm");

export const setupCloudFoundationMaturityModel = (): void => {
  const cfmm = computed(() => resolveCloudFoundationMaturityModel());
  provide(cfmmSymbol, cfmm);
};

function resolveCloudFoundationMaturityModel(): CloudFoundationMaturityModel {
  return new CloudFoundationMaturityModel();
}
