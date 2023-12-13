<template>
  <main class="about-page">
    <div class="head-section">
      <div class="head-container d-flex">
        <img class="w-100 h-100" src="./about_bg.svg" alt="About" />
      </div>
      <div class="alert-box bg-black d-flex align-items-center">
        <p class="text-white">About</p>
      </div>
    </div>
    <div class="container">
      <div>
        <h3 class="sub-title">Why we started</h3>
        <p>
          We launched the Cloud Foundation Community to provide a space for
          Cloud Foundation Teams to share their experiences, develop best
          practices, and learn from one another.
          <br /><br />
          Regardless of industry, most large organizations face similar
          challenges when transitioning to the cloud. As the individuals
          responsible for managing these diverse cloud environments, Cloud
          Foundation Teams often work behind the scenes. They are the unsung
          heroes of an organization's cloud transformation, orchestrating the
          business value of digital transformation with its technical
          implementation.
          <br /><br />
          We work with Cloud Foundation Teams every day and aim to facilitate
          this conversation. We are excited to see the Cloud Foundation
          Community continues to grow and thrive in the future.
        </p>
        <a
          href="https://hubs.ly/Q01RxdMl0"
          class="btn btn-outline-primary btn-lg"
        >
          Join Slack Community
          <img class="after" src="./slack_color.svg" alt="Slack" />
        </a>
      </div>
      <div class="target-group">
        <h3 class="sub-title">Target Group</h3>
        <p class="font-weight-light">
          The Cloud Foundation Community targets Cloud Engineers and Architects
          that build the platforms of tomorrow. Cloud Foundations are key to
          drive cloud adoption in large organizations.
        </p>
        <!--        <div class="row gutter-sm mt-5">-->
        <!--          <div class="target-group-card col-lg-4">-->
        <!--            &lt;!&ndash;            <img src="./user1.svg" alt="Ursula Gurnmeister" />&ndash;&gt;-->
        <!--            <div class="target-group-card__content">-->
        <!--              <h4>Ursula Gurnmeister</h4>-->
        <!--              <span>Plastic Surgeon, Skinnovate</span>-->
        <!--              <p>-->
        <!--                “With the Cloud Foundation Maturity Model, we sharpened our-->
        <!--                cloud vision and can demonstrate what we are aiming for.”-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="target-group-card col-lg-4 mt-4 mt-lg-0">-->
        <!--            &lt;!&ndash;            <img src="./user2.svg" alt="Linguina Nettlewasser" />&ndash;&gt;-->
        <!--            <div class="target-group-card__content">-->
        <!--              <h4>Linguina Nettlewasser</h4>-->
        <!--              <span>Backend, Backwork</span>-->
        <!--              <p>-->
        <!--                “The model helps us to make gaps in our cloud foundation-->
        <!--                transparent and act on them.”-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="target-group-card col-lg-4 mt-4 mt-lg-0">-->
        <!--            &lt;!&ndash;            <img src="./user3.svg" alt="Hermann W. Schnitzel" />&ndash;&gt;-->
        <!--            <div class="target-group-card__content">-->
        <!--              <h4>Hermann W. Schnitzel</h4>-->
        <!--              <span>CEO, Veggielante</span>-->
        <!--              <p>-->
        <!--                “The model is a great tool for internal communication, e.g. to-->
        <!--                coordinate the roadmap with management.”-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <div class="pb-5">
        <h3 class="sub-title">The Cloud Foundation Maturity Model</h3>
        <p>
          The Cloud Foundation Maturity Model is a core asset of the Cloud
          Foundation Community. It serves as an instrument for communication and
          helps us to develop a common language when talking about Cloud
          Foundation challenges and the capabilities required to solve these.
        </p>
        <div class="pl-0 pl-md-5 mt-5">
          <div class="mb-5">
            <h3 class="font-weight-bold">
              Contributing to the Cloud Foundation Maturity Model
            </h3>
            <p class="font-weight-light">
              External contributions to the Cloud Foundation Maturity Model are
              welcome. Please join us on GitHub for helping us improve the
              model.
            </p>
            <a
              href="https://github.com/meshcloud/cloudfoundation"
              class="btn btn-outline-primary btn-lg text-decoration-underline"
            >
              Contribute on GitHub</a
            >
          </div>
          <div class="mb-5">
            <h3 class="font-weight-bold">
              Using the Cloud Foundation Maturity Model
            </h3>
            <p class="font-weight-light">
              The Cloud Foundation Maturity Model is available under the terms
              of the

              <a
                href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
                target="_blank"
                rel="license noopener noreferrer"
                >CC BY-SA 4.0<img
                  style="
                    height: 22px !important;
                    margin-left: 3px;
                    vertical-align: text-bottom;
                  "
                  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img
                  style="
                    height: 22px !important;
                    margin-left: 3px;
                    vertical-align: text-bottom;
                  "
                  src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img
                  style="
                    height: 22px !important;
                    margin-left: 3px;
                    vertical-align: text-bottom;
                  "
                  src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
              /></a>
              License. Please attribute authors as "The Cloud Foundation Community".
            </p>
          </div>
          <div class="mb-5">
            <h3 class="font-weight-bold">What is not permitted</h3>
            <p class="font-weight-light">
              You cannot use the Cloud Foundation Maturity Model without providing attribution and sharing your improvements or modifications as outlined in the CC-BY-SA 4.0 license.
              <br>
              "Cloud Foundation Maturity Model" is a registered trademark of meshcloud GmbH.
            </p>
          </div>
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
$small: 768px;
$large: 1200px;

main.about-page {
  font-size: 18px;

  .head-section {
    padding: 0 15px;
  }

  h3.sub-title {
    font-weight: 700;
    font-size: 32px;
  }

  .alert-box {
    height: 40px;
    max-width: 1350px;
    margin: 41px auto 68px;
    padding: 0 37px;
    background: black;
    border-radius: 100px;

    p {
      margin: 0;
      font-size: 20px;
      font-weight: 800;
    }
  }

  .target-group {
    margin-bottom: 64px;

    .target-group-card {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 186px;
        border-radius: 50px;
        margin-bottom: -85px;
        border: 7px solid white;
        z-index: 2;
      }

      &__content {
        border-radius: 50px;
        padding: 112px 47px 72px;
        text-align: center;
        flex: 1;

        h4 {
          font-weight: 700;
          font-size: 24px;
          line-height: 37px;
          margin: 0 0 30px;
        }

        span {
          font-weight: 500;
          font-size: 18px;
        }

        p {
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
          margin: 30px 0 0;
        }
      }
    }

    .target-group-card:nth-of-type(2n + 1) {
      > div {
        background: #d4f0fa;
      }
    }

    .target-group-card:nth-of-type(2n) {
      > div {
        background: #fdfccc;
      }
    }
  }
}
</style>
