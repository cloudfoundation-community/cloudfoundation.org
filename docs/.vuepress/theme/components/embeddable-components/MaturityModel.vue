<template>
    <div class="card">

        <div class="card-col">

         <TenantMgmt :data-list="tenantMgmt">

         </TenantMgmt>
        </div>


        <div class="card-col">
         <Iam :data-list="iam">

         </Iam>
        </div>


        <div class="card-col">
         <Compliance :data-list="compliance">

         </Compliance>
        </div>


        <div class="card-col">

            <ChargeBack :data-list="chargeBack">

            </ChargeBack>
       
        </div>


        <div class="card-col">

            <ServiceEcoSystem :data-list="serviceEcosystem">

            </ServiceEcoSystem>
         
        </div>
     

      </div>


</template>



<script  lang="ts">
import { index } from "../../../index";
import TenantMgmt from "./mm-components/TenantMgmt.vue";
import Iam from "./mm-components/Iam.vue";
import Compliance from "./mm-components/Compliance.vue";
import ChargeBack from "./mm-components/ChargeBack.vue";
import ServiceEcoSystem from "./mm-components/ServiceEcoSystem.vue";

interface IMaturityModelAtom {
  step: string,
  scope: string,
  title: string,
  link: string
}

export default {
  components: {
    TenantMgmt,
    Iam,
    Compliance,
    ChargeBack,
    ServiceEcoSystem
  },
  computed: {
    tenantMgmt():IMaturityModelAtom[] {
      return this.getFilterData("🗂 Tenant Management")
    },
    iam():IMaturityModelAtom[] {
      return this.getFilterData("🔐 IAM")
    },
    compliance():IMaturityModelAtom[] {
      return this.getFilterData("🔖 Security & Compliance")
    },
    chargeBack():IMaturityModelAtom[] {
      return this.getFilterData("💵 Cost Management")
    },
    serviceEcosystem():IMaturityModelAtom[] {
      return this.getFilterData("🛠 Service Ecosystem")
    }
  },
  methods: {
    getFilterData(groupName): IMaturityModelAtom[] {
      return index
          .filter(value => value.file && value.meta.category === groupName)
          .sort(function (a, b) {
            return a.properties["journey-stage"].length - b.properties["journey-stage"].length;
          })
          .map(value => {
            const url = value.file.split("/");
            url.splice(0, 2);
            return {
              step: this.getJourneyStageUrl(value.properties["journey-stage"].length / 2),
              scope: this.getScopeCubeUrl(value.properties.scope),
              title: value.meta.title,
              link: url.join('/').replace(".md", ".html")
            }
        })
    },
    getJourneyStageUrl(journeyStageValue: number): string {
      let suffix = "";
        if (journeyStageValue === 1) suffix = "red";
        if (journeyStageValue === 2) suffix = "orange";
        if (journeyStageValue === 3) suffix = "yellow";
        if (journeyStageValue === 4) suffix = "green";
        if (journeyStageValue === 5) suffix = "blue";
      return `journey-stage-${journeyStageValue}-${suffix}.svg`
    },
    getScopeCubeUrl(scopeName): string {
      const prefix = "scope-cube-";
      if (scopeName === "🛬 Landing Zone") return `${prefix}turquoise.svg`;
      else if (scopeName === "☁️ Platform") return `${prefix}purple.svg`;
      else if (scopeName === "🏢 Core") return `${prefix}blue.svg`;
      else if (scopeName === "🏢 Core") return `${prefix}blue.svg`;
    }
  }
};
</script>



<style >
.theme-default-content {
  max-width: 100% !important;
  padding: 0 !important;
}
h1,
.page-meta,
footer,
.footer {
  display: none !important;
}

.page {
  padding-bottom: 0 !important;
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

    @media only screen and (max-width: 1200px) {
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
}
</style>
