<template>
  <a v-bind:href='url' class="action-button">
    <slot></slot> →
  </a>
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>

<style scoped lang="scss">

.action-button {
  padding: 0.6rem 1.2rem;
  margin-right: 12px;
  text-decoration: none !important;

  &.secondary {
    color: #3eaf7c;
    border: 2px solid #3eaf7c;
    background: var(--c-tip-bg);
    margin-top: 12px;

    &:hover {
      background: rgba(62, 175, 124, 0.1);
    }
  }
}

</style>