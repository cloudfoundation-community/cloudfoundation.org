<template>
  <main>
    <div class="head-section">
      <div class="head-container">
        <div class="head-container--content">
          <h1>
            The<br />
            Cloud Foundation<br />
            Community<br />
          </h1>
          <p>
            Connect with leading Enterprise Architects & Engineers  who build
            the platforms that drive cloud adoption
          </p>
          <div class="d-flex button-group">
            <a
              href="https://join.slack.com/t/cloudfoundation-org/shared_invite/zt-20ghuqkoj-ClraVpIIixF3Byn3IpyWDg"
              class="btn btn-primary btn-md"
            >
              Join now
              <img class="after" src="./slack_white.svg" alt="Slack" />
            </a>
            <router-link
              to="/maturity-model/"
              class="btn btn-outline-secondary btn-md ml-4"
            >
              Start Building
            </router-link>
          </div>
        </div>
        <div class="rocket-bg d-flex justify-content-end">
          <img src="./rocket.svg" alt="rocket" />
          <router-link to="/maturity-model/" class="maturity-model-image">
            <img src="./maturity_model_image.svg" alt="Maturity Model" />
          </router-link>
        </div>
      </div>
      <div
        class="alert-box bg-black d-flex justify-content-center align-items-center"
      >
        <img src="./calendar.svg" alt="Calendar" />
        <p class="text-white">
          Upcoming: meshcloud Conference 2023 on September 19th
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row hero">
        <div class="col-12 col-lg-6 hero-left">
          <h1 class="hero-title">New to Cloud Foundations?</h1>
          <p class="desc">
            An organization’s Cloud Foundation offers cloud as a commodity for
            the software application teams across the organization. Providing a
            Cloud Foundation is an organizational and technological approach to
            managing the cloud. Its goal is to enable teams to build in the
            cloud and accelerate an organization’s software delivery.
          </p>
          <a
            href="https://cloudfoundation.org/understanding-cloud-foundation/"
            class="btn btn-outline-primary btn-lg mt-2"
          >
            Read The Guide
          </a>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-end">
          <img class="hero-img m-0" src="./building_blocks.svg" alt="Guide" />
        </div>
      </div>
      <div class="row hero flex-md-row-reverse">
        <div class="col-12 col-lg-6">
          <h1 class="hero-title">
            Plan your journey with the free Maturity Model
          </h1>
          <p class="desc">
            The Cloud Foundation Maturity Model provides 70+ building blocks
            that describe what leading organizations are building to their cloud
            journey. Use the model to assess where you are and plan your next
            steps.
          </p>
          <router-link
            to="/maturity-model/"
            class="btn btn-outline-primary btn-lg mt-2"
          >
            Explore the Model
          </router-link>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-start">
          <img class="hero-img m-0" src="./cfmm_othersize.svg" alt="CFMM" />
        </div>
      </div>
      <div class="row hero">
        <div class="col-12 col-lg-6">
          <h1 class="hero-title">Get involved!</h1>
          <p class="desc">
            The Cloud Foundation Community’s Slack channel is a good first step
            into a collaborative community of cloud professionals from around
            the world.
          </p>
          <a
            href="https://join.slack.com/t/cloudfoundation-org/shared_invite/zt-20ghuqkoj-ClraVpIIixF3Byn3IpyWDg"
            class="btn btn-outline-primary btn-lg mt-2"
          >
            Join The Community
            <img class="after" src="./slack_color.svg" alt="Slack" />
          </a>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-end">
          <img class="hero-img m-0" src="./rocket_open.svg" alt="Rocket" />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "../Footer.vue";
</script>

<style scoped lang="scss">
$small: 1000px;
$large: 1200px;

main {
  .head-section {
    padding: 0 15px;
  }

  .head-container {
    display: flex;
    flex-direction: column;

    &--content {
      margin-top: 125px;
      margin-left: 117px;
      z-index: 2;

      h1 {
        font-size: 64px;
        font-weight: 700;
        margin: 0;
      }

      p {
        margin: 42px 0;
        max-width: 590px;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -0.03em;
      }
    }

    .rocket-bg {
      position: relative;
      margin-top: -208px;

      img {
        height: 717px;
        margin: inherit;
      }

      .maturity-model-image {
        position: absolute;
        bottom: 67%;
        right: 20%;
        width: 27%;
        height: auto;
        z-index: 2;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    @media (max-width: 1350px) {
      .rocket-bg {
        margin-top: 0;
        height: 500px;
        justify-content: center !important;

        img {
          height: 100%;
        }

        .maturity-model-image {
          position: absolute;
          bottom: 48%;
          right: 38%;
          width: 250px;
        }
      }
    }

    @media (max-width: 768px) {
      &--content {
        margin: 0;
        padding: 30px;
        text-align: center;

        h1 {
          font-size: 40px;
        }

        p {
          text-align: center;
          max-width: 100%;
        }

        > div {
          justify-content: center;
        }

        .button-group {
          flex-direction: column;

          .btn:last-child {
            margin-left: 0 !important;
            margin-top: 10px;
          }
        }
      }

      .rocket-bg {
        padding: 0 30px;
        width: 100%;
        height: unset;

        img {
          width: 100%;
          height: unset;
        }

        .maturity-model-image {
          position: absolute;
          bottom: 47%;
          right: 32%;
          width: 37%;
        }
      }
    }
  }

  .alert-box {
    max-width: 1350px;
    margin: 67px auto 71px;
    padding: 0 30px;
    background: black;
    border-radius: 100px;
    font-weight: 600;

    img {
      width: 23px;
      height: 19px;
      margin: 0 30px 0 0;
    }
  }

  h1,
  h2 {
    font-weight: 800;
  }

  .desc {
    color: black;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin: 30px 0 40px;
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
    }

    img.hero-img {
      max-width: 460px;
      height: 240px;

      @media (min-width: $small) {
        height: 350px;
      }
    }

    .hero-title {
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 32px;
      font-weight: 700;

      @media (min-width: $small) {
        font-size: 28px;
      }

      @media (min-width: $large) {
        font-size: 32px;
      }
    }

    @media (max-width: $small) {
      .hero-img {
        margin-top: 30px !important;
        width: 100% !important;
        max-width: 100% !important;
        height: 100% !important;
      }
    }
  }
}
</style>
