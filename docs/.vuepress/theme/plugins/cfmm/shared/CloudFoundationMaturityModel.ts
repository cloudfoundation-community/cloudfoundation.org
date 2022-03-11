import { computed, ComputedRef } from "vue";
import { index } from "./blocks";

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
  readonly blocks = computed(() =>
    index
      .filter((x) => x.file && x.frontmatter.pageType === "CFMMBlock")
      .map((value) => ({
        id: value.frontmatter.id,
        pillar: value.frontmatter.category,
        journeyStage: value.frontmatter.properties["journey-stage"],
        scope: value.frontmatter.properties.scope,
        title: value.frontmatter.title,
        link: this.formatLink(value.file),
        summary: value.frontmatter.description,
      }))
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

  readonly blocksById: ComputedRef<Map<string, MaturityModelBlock>> = computed(
    () => {
      return new Map(this.blocks.value.map((x) => [x.id, x]));
    }
  );

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
    return this.blocks.value
      .filter((x) => x.pillar === pillarName)
      .sort(this.sortyByJourneStage);
  }

  private readonly sortyByJourneStage = (a: MaturityModelBlock, b: MaturityModelBlock) => {
    return a.journeyStage.length - b.journeyStage.length;
  };

  queryBlocksSortedByJourneyStage(ids: string[]): MaturityModelBlock[] {
    const blocks = ids.map((x) => this.blocksById.value.get(x));
    return blocks.sort(this.sortyByJourneStage);
  }

  // this is stupid and duplicate with CFMMBlockPage.vue, but it works
  // we probably should extract all those index lookup shenanigans to a separate service
  private formatLink(path: string) {
    const readme = "readme.md";
    if (path.endsWith(readme)) {
      return "/" + path.substring(0, path.length - readme.length);
    }

    return "/" + path.replace(".md", ".html");
  }
}