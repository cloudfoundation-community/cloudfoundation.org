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
        <MaturityModelAtom :data-list="chargeBack" :title="'CHARGEBACK'">
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
    chargeBack(): IMaturityModelAtom[] {
      return this.getFilterData("💵 Cost Management");
    },
    serviceEcosystem(): IMaturityModelAtom[] {
      return this.getFilterData("🛠 Service Ecosystem");
    }
  },
  methods: {
    getFilterData(groupName): IMaturityModelAtom[] {
      return index
        .filter(value => value.file && value.meta.category === groupName)
        .sort(function(a, b) {
          return (
            a.properties["journey-stage"].length -
            b.properties["journey-stage"].length
          );
        })
        .map(value => {
          const url = value.file.split("/");
          url.splice(0, 2);
          return {
            step: this.getJourneyStageUrl(
              value.properties["journey-stage"].length / 2 //Each emoji length is two
            ),
            scope: this.getScopeCubeUrl(value.properties.scope),
            title: value.meta.title,
            link: url.join("/").split(".")[0],
            summary: value.properties.summary
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

<style lang="scss">
.no-sidebar {
  .theme-default-content {
    max-width: none;
    min-height: calc(100vh - 58px);
    padding: 0;
    display: flex;
    flex-direction: column;
    h1 {
      display: none;
    }
  }
  .page-meta,
  footer,
  .footer {
    display: none;
  }
}
.page {
  padding-bottom: 0;
}
</style>



<style scoped lang="scss">
.card {
  display: flex;
  background-color: #9fd9ec;
  padding-left: 75px;
  padding-right: 65px;
  flex-direction: row;
  flex-wrap: wrap;
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
      padding-left: 25px !important;
      padding-right: 15px !important;
    }
  }
}
</style>