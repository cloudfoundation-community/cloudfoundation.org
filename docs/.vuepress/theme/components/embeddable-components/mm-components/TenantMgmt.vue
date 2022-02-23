<template>
    <h4 class="title">
        Tenant MGMT.
    </h4>

    <MaturityModelAtom  v-for="item in dataList"
        :step="item.step"
        :title="item.title"
        :scope="item.scope"
        :link="item.link"
    >

    </MaturityModelAtom>
</template>


<script lang="ts">
import MaturityModelAtom from "./MaturityModelAtom.vue";
export default {
  components: {
    MaturityModelAtom
  },
  props: ["dataList"],
};
</script>

<style lang="scss">
h4 {
  margin-bottom: 0;
  color: #ffffff !important;
}
.title {
  text-transform: uppercase;
  color: #ffffff;
  font-size: 18px;
  font-weight: 900;
}
</style>
