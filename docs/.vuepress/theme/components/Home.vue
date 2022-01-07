<template>
  <main>
    <div class="container">
      <div class="row hero">
        <div class="col-12 col-lg-6 hero-left">
          <h1 class="hero-title">Build your Cloud Foundation!</h1>
          <span class="desc">
            Bring cloud adoption at your organization to the next level with the free Cloud Foundation Maturity Model.
            Use 50+ actionable building blocks to identify your current cloud maturity, and where to grow.
          </span>
          <br/>
          <a href="/maturity-model/" class="action-button">Explore Building Blocks →</a>
        </div>
        <div class="col-12 col-lg-6 hero-right">
          <img src="./heroimage.png">
        </div>
      </div>
      <div class="row flex-column-reverse flex-md-row">
        <div class="col-12 col-lg-6">
          <img src="./cfmm.png">
        </div>
        <div class="col-12 col-lg-6">
          <h1>What is the Cloud Foundation Maturity Model?</h1>
          <span class="desc">
            The cloud foundation is an organizational approach to managing cloud adoption and
            consumption through a single team.

            The Cloud Foundation Maturity Model (CFMM) is built on 50+ building blocks
            that help you build and improve your own cloud foundation team.
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <h1>Why a Cloud Foundation Team?</h1>
          <span class="desc">
            A cloud foundation team provides DevOps teams a single point of contact for provisioning,
            accessing and managing all cloud services they need to get their job done. It frees DevOps
            teams from organizational burden and empowers them to focus on their core value: delivering software.

            Having a cloud foundation team also helps aligning technical and management stakeholders.
          </span>
        </div>
        <div class="col-12 col-lg-6">
          <img src="./team.png">
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>

<script setup lang="ts">
import Footer from "./Footer.vue"
</script>

<style scoped lang="scss">
$small: 768px;
$large: 1200px;

main {
  padding-top: calc(var(--navbar-height) * 1.5);

  @media (min-width: $small) {
    padding-top: calc(var(--navbar-height) * 2.5);
  }

  h1 {
    font-size: 24px;
    font-weight: 800;
  }

  .desc {
    line-height: 1.7;
  }

  img {
    // This centers an image in its container
    display: block;
    margin: auto;
    height: 240px;

    @media (min-width: $small) {
      height: 300px;
    }

  }

  .hero {
    margin-bottom: 72px;

    .action-button {
      margin-top: 32px;
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: #3eaf7c;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color .1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid #389d70;

      &:hover {
        background-color: #4abf8a;
      }
    }

    img {
      height: 240px;

      @media (min-width: $small) {
        height: 400px;
      }
    }

    .hero-title {
      font-size: 24px;
      margin-bottom: 32px;

      @media (min-width: $small) {
        font-size: 36px;
      }

      @media (min-width: $large) {
        font-size: 48px;
      }
    }
  }

  .footer {
    text-align: center;
  }
}
</style>