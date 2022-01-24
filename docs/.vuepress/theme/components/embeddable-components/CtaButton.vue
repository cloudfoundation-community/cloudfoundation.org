<template>
  <a v-bind:href="url" class="btn mr-2"> <slot></slot> → </a>
</template>

<script>
export default {
  props: {
    url: String,
  },
};
</script>

<style scoped lang="scss">
</style>
