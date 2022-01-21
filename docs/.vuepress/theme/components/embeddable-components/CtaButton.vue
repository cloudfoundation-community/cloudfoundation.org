<template>
  <a v-bind:href='url' class="action-button btn">
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
  font-weight: 500;
  margin-top: 0.75rem;

  &.btn-secondary {
    color: #3eaf7c;
    border: 2px solid #3eaf7c;
    background: var(--c-tip-bg);

    &:hover {
      background: rgba(62, 175, 124, 0.1);
    }

    &:active {
      color: #3eaf7c;
    }
  }
}

</style>