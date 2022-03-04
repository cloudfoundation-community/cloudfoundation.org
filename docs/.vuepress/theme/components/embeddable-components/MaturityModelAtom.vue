<template>
  <router-link :to="blockData.link" class="block-atom"  >
    <div class="block-wrapper">
      <div class="block" >
      <img class="block-step" :src="$withBase('/mm/' + blockData.step)" :alt="blockData.step" alt="journeyStageColor.svg" />
      <img class="block-scope" :src="$withBase('/mm/' + blockData.scope)" :alt="blockData.scope" alt="scopeColorBox.svg"  />
      <div class="block-content">
        <p v-text="blockData.title"></p>
      </div>
      <slot></slot>
    </div>
    <div class="tooltip-text">
      <p>{{blockData.summary}}</p>
    </div>
    </div>
  </router-link>
</template>


<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink
  },
  props: ["blockData"]
};
</script>

<style lang="scss" scoped>
h4 {
  margin-bottom: 0;
  color: #ffffff;
}
.title {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 18px;
  font-weight: 900;
}
</style>

<style lang="scss" scoped>
.block-wrapper {
    background-color: white;
    margin: 0rem;
    margin: 0 10px 10px 0;
    border-radius: 8px;
}
a:hover {
  text-decoration: none !important;
}
.block-atom {
  position: relative;

  .tooltip-text {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    display: none;
    padding: 0 10px 10px;
    text-align: left;
    color: black;
  }

    &:hover .tooltip-text {
    display: block;
  }

  .block {
    background-color: white;
    padding: 8px;
    display: flex;
    align-items: center;
    margin: 0 10px 10px 0;
    height: 55px;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    img.block-step {
      min-width: 15px;
      max-width: 15px;
    }
    img.block-scope {
      min-width: 33px;
      max-width: 33px;
      margin-right: 10px;
    }
    .block-content {
      min-height: 45px;
      flex-grow: 1;
      display: flex;
      align-items: center;
      text-align: left;
      p {
        font-size: 10px;
        font-weight: 700;
        color: #2d3e4f;
      }
    }
  }
}
</style>
