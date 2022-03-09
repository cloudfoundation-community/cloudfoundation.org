import { computed, ComputedRef } from "vue";
import { index } from "../../../../index";

import { MaturityModelBlock } from "./MaturityModelBlock";
import { MaturityModelPillar } from "./MaturityModelPillar";
import { Pillar } from "./Pillar";

export interface PillarModel {
  pillar: MaturityModelPillar;
  blocks: MaturityModelBlock[];
}

/**
 * A repository for CFMM data
 */
export class CloudFoundationMaturityModel {
  /**
   * all blocks raw from the index
   */
  readonly rawBlocks = computed(() =>
    index.filter((x) => x.file && x.frontmatter.pageType === "CFMMBlock")
  );

  readonly rawPillars = computed(
    () => index.filter((x) => x.file && x.frontmatter.category === "Pillar") // tbd: may need a nother page type!
  );

  readonly pillars: Record<Pillar, ComputedRef<PillarModel>> = {
    tenantManagement: computed(() => this.pillarModel("🗂 Tenant Management")),
    iam: computed(() => this.pillarModel("🔐 IAM")),
    compliance: computed(() => this.pillarModel("🔖 Security & Compliance")),
    costManagement: computed(() => this.pillarModel("💵 Cost Management")),
    serviceEcosystem: computed(() => this.pillarModel("🛠 Service Ecosystem")),
  };

  private pillarModel(pillarName: string): PillarModel {
    return {
      pillar: this.pillarPage(pillarName),
      blocks: this.pillarBlocksSortedByJourneyStage(pillarName),
    };
  }

  private pillarPage(pillarName: string): MaturityModelPillar {
    const value = this.rawPillars.value.find(
      (x) => x.frontmatter.title === pillarName
    );

    if (!value) {
      throw new Error("Could not find pillar page for: " + pillarName);
    }
    return {
      title: value.frontmatter.title,
      shortTitle: value.frontmatter.properties["short-name"],
      link: this.formatLink(value.file),
      summary: value.frontmatter.description,
    };
  }

  private pillarBlocksSortedByJourneyStage(pillarName): MaturityModelBlock[] {
    return this.rawBlocks.value
      .filter((x) => x.frontmatter.category === pillarName)
      .map((value) => {
        return {
          journeyStage: value.frontmatter.properties["journey-stage"],
          scope: value.frontmatter.properties.scope,
          title: value.frontmatter.title,
          link: this.formatLink(value.file),
          summary: value.frontmatter.description,
        };
      })
      .sort(function (a, b) {
        return a.journeyStage.length - b.journeyStage.length;
      });
  }

  // this is stupid and duplicate with CFMMBlockPage.vue, but it works
  // we probably should extract all those index lookup shenanigans to a separate service
  formatLink(path: string) {
    const readme = "readme.md";
    if (path.endsWith(readme)) {
      return "/" + path.substring(0, path.length - readme.length);
    }

    return "/" + path.replace(".md", ".html");
  }
}
