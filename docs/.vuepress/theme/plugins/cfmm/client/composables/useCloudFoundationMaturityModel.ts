import { inject } from "vue";
import { cfmmSymbol, CloudFoundationMaturityModelRef } from "./setupCloudFoundationMaturityModel";

export const useCloudFoundationMaturityModel = (): CloudFoundationMaturityModelRef => {
  const cfmm = inject(cfmmSymbol);
  if (!cfmm) {
    throw new Error("useCloudFoundationMaturityModel() is called without provider.");
  }

  return cfmm;
};
