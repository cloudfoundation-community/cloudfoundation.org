<template>
  <div class="pillar-category" :class="{'hidden': !showDetail}">
    <h4 class="title">{{title}}</h4>
    <div class="pillar-category-mobile-intro">
      <p>
        Tenant Management  enables your organization to get a clear and governed overview of all activity going on in the cloud platforms.
      </p>
      <p v-show="showMoreText">
        Lorem ipsum solor dit amet, Lorem ipsum solor dit amet, Lorem ipsum solor dit amet, Lorem ipsum solor dit amet, Lorem ipsum solor dit amet
      </p>
      <p class="toggle-gtn" @click="toggleSummary">{{showMoreText ? "Show Less" : "Read More"}}</p>
    </div>
    <MaturityModelAtom  v-for="item in dataList" :key="item.link" :block-data="item">
    </MaturityModelAtom>
  </div>
</template>

<script lang="ts">
import MaturityModelAtom from "./MaturityModelAtom.vue";
export default {
  components: {
  MaturityModelAtom
  },
  props: ["showDetail", "title", "dataList"],
  data() {
    return {
      showMoreText: false,
    }
  },
  methods: {
    toggleSummary(): void {
      this.showMoreText = !this.showMoreText;
    }
  }
};
</script>

<style lang="scss" scoped>
.pillar-category {
  text-align: center;

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
    @media screen and (max-width: 580px){
      display: none;
    }
  }

  .pillar-category-mobile-intro {
    display: none;
    @media screen and (max-width: 580px){
      display: block;
    }
  }

  p.toggle-gtn {margin-bottom: 24px; color: #1ab9de; text-decoration: underline; font-weight: bold; cursor: pointer}
}
</style>
