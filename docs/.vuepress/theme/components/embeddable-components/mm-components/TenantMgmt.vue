<template>
    <h4 class="title">
        Tenant MGMT.
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
    this.rows = getCategoryData("🗂 Tenant Management");
  }
};
</script>

<style lang="scss">
h4 {
  margin-bottom: 5px;
  color: #ffffff !important;
}
.title {
  text-transform: uppercase;
  color: #ffffff;
  font-size: 18px;
  font-weight: 900;
}
</style>