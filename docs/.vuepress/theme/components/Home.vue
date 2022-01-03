<template>
  <main>
    <div class="container">
      <div class="row hero">
        <div class="col-12 col-lg-6 hero-left">
          <h1 class="hero-title">Build your Cloud Foundation!</h1>
          <span class="desc">
            Bring cloud adoption at your organization to the next level with the Cloud Foundation Maturity Model.
            Use our free 50+ actionable building blocks to identify your current cloud maturity, and where to grow.
          </span>
        </div>
        <div class="col-12 col-lg-6 hero-right">
          <!-- TODO this image doesn't work in dark mode. Might have to get something else -->
          <!-- or maybe it works better with SVG? Or get rid of darkmode altogether -->
          <img class="hero-right-image" src="./heroimage.png">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <h1>What is the Cloud Foundation Maturity Model?</h1>
          <span class="desc">
            The cloud foundation is an organisational approach to managing cloud adoption and
            consumption through a single team.

            The Cloud Foundation Maturity Model (CFMM) is built on 50+ building blocks
            that help you build and improve your own cloud foundation team.
          </span>
        </div>
        <div class="col-12 col-lg-6">
          <img src="./cfmm.png" style="height: 300px;">
        </div>
      </div>
      <!-- TODO flex-column-reverse doesn't work. Maybe do it with plain CSS. -->
      <div class="row flex-column-reverse flex-md-row">
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
          <img src="./team.png" style="height: 300px;">
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
$small: 768px;
$large: 1200px;

main {
  padding-top: var(--navbar-height);

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
  }

  .hero {
    margin-bottom: 72px;

    .hero-title {
      font-size: 24px;
      text-align: center;

      @media (min-width: $small) {
        font-size: 36px;
        text-align: left;
      }

      @media (min-width: $large) {
        font-size: 48px;
      }
    }
  }

  .hero-right {
    .hero-right-image {
      height: 400px;
    }
  }
}
</style>