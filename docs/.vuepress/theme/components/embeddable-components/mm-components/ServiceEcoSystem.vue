<template>
    <h4 class="title">
        Service Ecosystem
    </h4>
    <MaturityModelAtom  v-for="item in rows"
         :step = "item.properties['journey-stage']"
        :title = "item.meta.title"
        :scope = "item.properties['scope']"
        :link = "item.link"
         >

    </MaturityModelAtom>
</template>


<script lang="ts">
import MaturityModelAtom from "./MaturityModelAtom.vue";
import { getCategoryData } from "../../../../utils/maturity_model";
export default {
  components: {
    MaturityModelAtom
  },

  data() {
    return {
      rows: []
    };
  },
  created() {
    this.rows = getCategoryData("🛠 Service Ecosystem");
  }
};
</script>
