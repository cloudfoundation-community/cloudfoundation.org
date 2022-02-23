<template>
  
    <router-link :to="link">
        <div class="each-card">
            <img class="card-step" :src="$withBase('/mm/' +step)" alt="" />
            <img class="card-scope" :src="$withBase('/mm/' + scope)" alt="" />

          <div class="card-content">
            <p v-text="title"></p>
          </div>
        </div>
    </router-link>
     

</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {RouterLink},
  props: {
    step: String,
    scope: String,
    title: String,
    link: String
  }
};
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none !important;
}
.each-card {
  background-color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  margin: 0 10px 10px 0;
  height: 55px;
  border-radius: 8px;

  img.card-step {
    min-width: 15px;
    max-width: 15px;
  }

  img.card-scope {
    min-width: 33px;
    max-width: 33px;
    margin-right: 10px;
  }

  .card-content {
    min-height: 45px;
    flex-grow: 1;
    display: flex;
    align-items: center;

    p {
      font-size: 10px;
      font-weight: 800;
      color: #2d3e4f;
    }
  }
}
</style>
