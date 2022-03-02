<template>
    <div class="card">

      <div class="card-col">
        <MaturityModelAtom :data-list="tenantMgmt" :title="'TENANT MGMT.'">
        </MaturityModelAtom>
      </div>

      <div class="card-col">
         <MaturityModelAtom :data-list="iam" :title="'IAM'">
         </MaturityModelAtom>
      </div>

      <div class="card-col">
        <MaturityModelAtom :data-list="compliance" :title="'COMPLIANCE'">
        </MaturityModelAtom>
      </div>

      <div class="card-col">
        <MaturityModelAtom :data-list="costMgmt" :title="'COST MGMT.'">
        </MaturityModelAtom>
      </div>

      <div class="card-col">
        <MaturityModelAtom :data-list="serviceEcosystem" :title="'SERVICE ECOSYSTEM'">
        </MaturityModelAtom>
      </div>

    </div>
</template>

<script  lang="ts">
import { index } from "../../../index";
import MaturityModelAtom from "./MaturityModelAtom.vue";

interface IMaturityModelAtom {
  step: string;
  scope: string;
  title: string;
  link: string;
  summary: string;
}

// this is stupid and duplicate with CFMMBlock.vue, but it works
// we probably should extract all those index lookup shenanigans to a separate service
function formatLink(path: string) {
  return "/" + path.replace(".md", ".html");
}

export default {
  components: {
    MaturityModelAtom
  },
  computed: {
    tenantMgmt(): IMaturityModelAtom[] {
      return this.getFilterData("🗂 Tenant Management");
    },
    iam(): IMaturityModelAtom[] {
      return this.getFilterData("🔐 IAM");
    },
    compliance(): IMaturityModelAtom[] {
      return this.getFilterData("🔖 Security & Compliance");
    },
    costMgmt(): IMaturityModelAtom[] {
      return this.getFilterData("💵 Cost Management");
    },
    serviceEcosystem(): IMaturityModelAtom[] {
      return this.getFilterData("🛠 Service Ecosystem");
    }
  },
  methods: {
    getFilterData(groupName): IMaturityModelAtom[] {
      return index
        .filter(value => value.file && value.frontmatter.category === groupName)
        .sort(function(a, b) {
          return (
            a.frontmatter.properties["journey-stage"].length -
            b.frontmatter.properties["journey-stage"].length
          );
        })
        .map(value => {
          return {
            step: this.getJourneyStageUrl(
              value.frontmatter.properties["journey-stage"].length / 2 //Each emoji length is two
            ),
            scope: this.getScopeCubeUrl(value.frontmatter.properties.scope),
            title: value.frontmatter.title,
            link: formatLink(value.file),
            summary: value.frontmatter.description
          };
        });
    },
    getJourneyStageUrl(journeyStageValue: number): string {
      let suffix = "";
      switch (journeyStageValue) {
        case 1:
          suffix = "red";
          break;
        case 2:
          suffix = "orange";
          break;
        case 3:
          suffix = "yellow";
          break;
        case 4:
          suffix = "green";
          break;
        case 5:
          suffix = "blue";
          break;
        default:
          throw `Invalid Journey Stage Value ${journeyStageValue}`;
      }
      return `journey-stage-${journeyStageValue}-${suffix}.svg`;
    },
    getScopeCubeUrl(scopeName): string {
      const prefix = "scope-cube-";
      switch (scopeName) {
        case "🛬 Landing Zone":
          return `${prefix}turquoise.svg`;
        case "☁️ Platform":
          return `${prefix}purple.svg`;
        case "🏢 Core":
          return `${prefix}blue.svg`;
        default:
          throw `Invalid Scope Cube Value ${scopeName}`;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  background-color: #9fd9ec;
  padding-left: 75px;
  padding-right: 65px;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
  .card-col {
    flex-grow: 1;
    max-width: 20%;
    @media only screen and (max-width: 1400px) {
      min-width: 25%;
    }
    @media only screen and (max-width: 1024px) {
      min-width: 33%;
    }
    @media only screen and (max-width: 800px) {
      min-width: 50%;
    }
    @media only screen and (max-width: 580px) {
      min-width: 100%;
    }
  }
  @media only screen and (max-width: 580px) {
    padding-left: 25px;
    padding-right: 15px;
  }
}
</style>
