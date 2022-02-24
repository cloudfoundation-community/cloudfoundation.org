<template>
  <h4 class="title">{{title}}</h4>

  <div v-for="item in dataList">
      <router-link :to="item.link" >
        <div class="block" >
            <img class="block-step" :src="$withBase('/mm/' + item.step)" :alt="item.step" alt="journeyStageColor.svg" />
            <img class="block-scope" :src="$withBase('/mm/' + item.scope)" :alt="item.scope" alt="scopeColorBox.svg"  />
            <div class="block-content">
              <p v-text="item.title"></p>
            </div>
        </div>
      </router-link>
  </div>

</template>


<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink
  },
  props: ["dataList", "title"]
};
</script>

<style lang="scss">
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
a:hover {
  text-decoration: none !important;
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
    p {
      font-size: 10px;
      font-weight: 700;
      color: #2d3e4f;
    }
  }
}
</style>