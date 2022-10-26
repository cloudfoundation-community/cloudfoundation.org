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
        tools: this.blockTools(
          value.frontmatter.properties["tool-implementations"]
        ),
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

  readonly allEntriesById = Object.assign(
    {},
    ...index.map((x) => ({ [x.frontmatter.id]: x.frontmatter }))
  );

  readonly relevantToolCategories = [
    "Governance Platform",
    "cli",
    "Landing Zone Implementation",
  ];

  readonly tools: string[] = Array.from(
    new Set(
      index
        .filter(
          (x) =>
            x.frontmatter.pageType === "CFMMTool" &&
            this.relevantToolCategories.includes(
              x.frontmatter.properties?.category || "n/a"
            )
        )
        .map((x) => x.frontmatter.title)
        .sort()
    )
  );

  private blockTools(linkIds: string[]): string[] {
    return linkIds
      .flatMap((linkId) => this.allEntriesById[linkId]?.properties["tool"])
      .map((toolId) => this.allEntriesById[toolId]?.title || "n/a");
  }

  private pillarModel(pillarName: string): PillarModel {
    return {
      pillar: this.pillarPage(pillarName),
      blocks: this.pillarBlocksSorted(pillarName),
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

  private pillarBlocksSorted(pillarName): MaturityModelBlock[] {
    return this.blocks.value
      .filter((x) => x.pillar === pillarName)
      .sort(this.blockSort);
  }

  private readonly blockSort = (
    x: MaturityModelBlock,
    y: MaturityModelBlock
  ) => {
    // this is effectively a "thenBy" sort, see https://stackoverflow.com/a/9175783/125407
    return (
      cmp(x.pillar, y.pillar) ||
      cmp(x.journeyStage.length, y.journeyStage.length) || // hack: journey stage is ⭐️ vs ⭐️⭐️ etc. so we compare length
      cmp(x.scope.length, y.scope.length) // hack: the scope values actually don't sort well by lexicographic comparison but it just so happens that the string legnth gives us the result we want (core -> platform -> LZ)
    );
  };

  queryBlocksSorted(ids: string[]): MaturityModelBlock[] {
    const blocks = ids.map((x) => this.blocksById.value.get(x));
    return blocks.sort(this.blockSort);
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

function cmp(a, b) {
  if (a > b) return +1;
  if (a < b) return -1;
  return 0;
}