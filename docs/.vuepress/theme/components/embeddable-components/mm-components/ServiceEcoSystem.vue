<template>
    <h4 class="title">
        Service Ecosystem
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
