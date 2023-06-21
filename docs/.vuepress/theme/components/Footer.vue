<template>
  <div class="footer">
    <div class="d-flex">
      Built with ❤️ by&nbsp;
      <a href="https://meshcloud.io/en">meshcloud</a>
      <span class="mx-2">·</span>
      <a href="https://www.meshcloud.io/en/imprint/">Imprint</a>
      <span class="mx-2">·</span>
      <a href="https://www.meshcloud.io/en/privacy-policy/">Privacy Policy</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  max-width: 1221px;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: #daeef6;
  border-radius: 100px 100px 0 0;

  a {
    font-weight: 400;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 576px) {
    height: 60px;

    > div {
      margin-bottom: 0 !important;
    }
  }
}
</style>
<script setup lang="ts"></script>
