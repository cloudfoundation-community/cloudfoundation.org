<template>
  <div class="pillar-category" :class="{ hidden: !showDetail }">
    <h4 class="title">{{ title }}</h4>
    <div class="pillar-category-mobile-intro">
      <p>
        Tenant Management enables your organization to get a clear and governed
        overview of all activity going on in the cloud platforms.
      </p>
      <p v-show="showMoreText">
        Lorem ipsum solor dit amet, Lorem ipsum solor dit amet, Lorem ipsum
        solor dit amet, Lorem ipsum solor dit amet, Lorem ipsum solor dit amet
      </p>
      <p class="toggle-gtn" @click="toggleSummary">
        {{ showMoreText ? "Show Less" : "Read More" }}
      </p>
    </div>
    <MaturityModelAtom
      v-for="item in dataList"
      :key="item.link"
      :block-data="item"
    >
    </MaturityModelAtom>
    <div class="spacer"></div>
  </div>
</template>

<script lang="ts">
import MaturityModelAtom from "./MaturityModelAtom.vue";
export default {
  components: {
    MaturityModelAtom,
  },
  props: ["showDetail", "title", "dataList"],
  data() {
    return {
      showMoreText: false,
    };
  },
  methods: {
    toggleSummary(): void {
      this.showMoreText = !this.showMoreText;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./maturity-model";

.pillar-category {
  // the blocks can fold/expand when hovered - this means that the pillar needs be tall enough that the blocks can fill
  // the pillar without changing its outer dimensions, as this would result in re-layout of the page pushing the footer
  // further down. This looks "janky" when changing the hovered pillar. We therefore ensure that there's enough space
  // in each pillar with a spacer at the 
  min-height: calc(100vh + $block-summary-max-height);
  display: flex;
  flex-direction: column;

.spacer {
    flex: 1;
    background-color: gray;
  }

  &.hidden {
    @media (max-width: 580px) {
      display: none;
    }
  }

  .title {
    margin-bottom: 0;
    text-transform: uppercase;
    color: white;
    font-size: 24px;
    font-weight: 900;
    font-family: "Montserrat", sans-serif;
    white-space: nowrap;
    @media screen and (max-width: 580px) {
      display: none;
    }
  }

  .pillar-category-mobile-intro {
    display: none;
    @media screen and (max-width: 580px) {
      display: block;
    }
  }

  p.toggle-gtn {
    margin-bottom: 24px;
    color: #1ab9de;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }

}
</style>
