<template>
  <div class="maturity-model-landing-page">
    <h1 class="maturity-model-title">Maturity Model</h1>
    <div class="card" :class="{ 'mobile-wrap': mobileWrap }">
      <div class="card-col">
        <div class="mobile-intro bg-white mb-3 mr-2">
          <h1>TENANT MGMT.</h1>
          <span
            >Tenant Management enables your organization to get a clear and
            governed overview of all activity going on in the cloud
            platforms</span
          >
          <button class="btn btn-primary mt-3" @click="handleClick(0)">
            {{ tenantMgmt.length }} Building Blocks
          </button>
        </div>
        <PilarCategory
          :show-detail="showDetailOfCategory[0].show"
          :data-list="tenantMgmt"
          :title="'TENANT MGMT.'"
        >
        </PilarCategory>
      </div>

      <div class="card-col">
        <div class="mobile-intro bg-white mb-3 mr-2">
          <h1>IAM</h1>
          <button class="btn btn-primary mt-3" @click="handleClick(1)">
            {{ iam.length }} Building Blocks
          </button>
          <span
            >Tenant Management enables your organization to get a clear and
            governed overview of all activity going on in the cloud
            platforms</span
          >
        </div>
        <PilarCategory
          :show-detail="showDetailOfCategory[1].show"
          :data-list="iam"
          :title="'IAM'"
        >
        </PilarCategory>
      </div>

      <div class="card-col">
        <div class="mobile-intro bg-white mb-3 mr-2">
          <h1>COMPLIANCE</h1>
          <button class="btn btn-primary mt-3" @click="handleClick(2)">
            {{ compliance.length }} Building Blocks
          </button>
          <span
            >Tenant Management enables your organization to get a clear and
            governed overview of all activity going on in the cloud
            platforms</span
          >
        </div>
        <PilarCategory
          :show-detail="showDetailOfCategory[2].show"
          :data-list="compliance"
          :title="'COMPLIANCE'"
        >
        </PilarCategory>
      </div>

      <div class="card-col">
        <div class="mobile-intro bg-white mb-3 mr-2">
          <h1>COST MGMT.</h1>
          <button class="btn btn-primary mt-3" @click="handleClick(3)">
            {{ costMgmt.length }} Building Blocks
          </button>
          <span
            >Tenant Management enables your organization to get a clear and
            governed overview of all activity going on in the cloud
            platforms</span
          >
        </div>
        <PilarCategory
          :show-detail="showDetailOfCategory[3].show"
          :data-list="costMgmt"
          :title="'COST MGMT.'"
        >
        </PilarCategory>
      </div>

      <div class="card-col">
        <div class="mobile-intro bg-white mb-3 mr-2">
          <h1>SERVICES</h1>
          <button class="btn btn-primary mt-3" @click="handleClick(4)">
            {{ serviceEcosystem.length }} Building Blocks
          </button>
          <span
            >Tenant Management enables your organization to get a clear and
            governed overview of all activity going on in the cloud
            platforms</span
          >
        </div>
        <PilarCategory
          :show-detail="showDetailOfCategory[4].show"
          :data-list="serviceEcosystem"
          :title="'SERVICE ECOSYSTEM'"
        >
        </PilarCategory>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { index } from "../../../index";
import MaturityModelAtom from "./MaturityModelAtom.vue";
import PilarCategory from "./PilarCategory.vue";

interface IMaturityModelAtom {
  journeyStage: string;
  scope: string;
  title: string;
  link: string;
  summary: string;
}

// this is stupid and duplicate with CFMMBlockPage.vue, but it works
// we probably should extract all those index lookup shenanigans to a separate service
function formatLink(path: string) {
  return "/" + path.replace(".md", ".html");
}

export default {
  components: {
    PilarCategory,
    MaturityModelAtom,
  },
  data() {
    return {
      showDetailOfCategory: [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false },
      ],
      mobileWrap: false,
    };
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
    },
  },
  methods: {
    handleClick(index): void {
      this.showDetailOfCategory[index].show =
        !this.showDetailOfCategory[index].show;
      this.mobileWrap = true;
    },
    getFilterData(groupName): IMaturityModelAtom[] {
      return index
        .filter(
          (value) => value.file && value.frontmatter.category === groupName
        )
        .sort(function (a, b) {
          return (
            a.frontmatter.properties["journey-stage"].length -
            b.frontmatter.properties["journey-stage"].length
          );
        })
        .map((value) => {
          return {
            journeyStage: value.frontmatter.properties["journey-stage"],
            scope: value.frontmatter.properties.scope,
            title: value.frontmatter.title,
            link: formatLink(value.file),
            summary: value.frontmatter.description,
          };
        });
    },
  },
};
</script>

<style scoped lang="scss">
.maturity-model-landing-page {
  padding: 48px 64px 24px;
  background-color: #9fd9ec;

  h1 {
    margin: 0 0 8px;
    font-weight: 900;
    color: white;
    display: none;
  }

  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &.mobile-wrap {
      @media screen and (max-width: 580px) {
        flex-wrap: nowrap;
        overflow-x: auto;
      }
    }

    h1 {
      font-weight: 800;
      color: white;
    }

    .card-col {
      flex-grow: 1;
      max-width: 20%;

      .mobile-intro {
        display: none;
      }
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
        border-radius: 12px;
        margin-bottom: 12px;

        .mobile-intro {
          padding: 0 12px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 12px;
          word-break: break-all;

          h1 {
            margin: 8px 0;
            color: #9fd9ec;
          }
          button {
            background: #9fd9ec;
            border-color: #9fd9ec;
          }
          span {
            color: #4a4a4a;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 580px) {
    padding-left: 25px;
    padding-right: 15px;
    h1 {
      display: block;
    }
  }

}
</style>
