<template>
  <main class="open-source-tools-page">
    <div class="head-section">
      <div class="alert-box bg-black d-flex align-items-center">
        <p class="text-white">Open-Source Tools</p>
      </div>
    </div>
    <div class="container">
      <div>
        <h3 class="sub-title">
          Accelerate Your Cloud Transformation with Our Open-Source Tools
        </h3>
        <p>
          Our community offers powerful tools that simplify the process of
          building scalable and secure cloud environments, including the Landing
          Zone-Construction Kit and Collie.
        </p>
      </div>
      <div class="card-list">
        <div class="card">
          <img src="./construction_kit.svg" alt="Contruction Kit" />
          <div class="card__content">
            <h4>Landing Zone-Contruction Kit</h4>
            <p>
              Landing Zones are an essential architectural pattern for building
              scalable and secure cloud environments to support multiple
              workloads. However, building Landing Zones can be a complex and
              time-consuming process, especially when dealing with multiple
              cloud platforms like AWS, Azure, and GCP. The meshcloud Landing
              Zone Construction Kit simplifies the process of building Landing
              Zones by using Infrastructure as Code and GitOps to reduce
              complexity. Our kit is built on terraform and enables you to
              integrate off-the-shelf reference IaC implementation published by
              cloud providers, as well as custom infrastructure automation. Our
              Landing Zone Construction Kit is a valuable resource in our
              community inventory, offering an intuitive interface and expert
              support to ensure a smooth and secure cloud deployment. With our
              kit, you can easily build a scalable and secure cloud environment
              that meets your specific needs.
            </p>
            <div class="d-flex">
              <router-link to="#" class="btn btn-outline-primary btn-md">
                Get Started!
              </router-link>
              <router-link to="#" class="btn btn-outline-secondary btn-md ml-3">
                GitHub
              </router-link>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./collie_logo.svg" alt="Collie" />
          <div class="card__content">
            <h4>Collie</h4>
            <p>
              Collie simplifies the management of multiple cloud platforms by
              bringing structure and visibility to your cloud landscape. With
              Collie's overview feature, you can view your costs, IAM, tags, and
              more across all cloud accounts within minutes. Collie's landing
              zone feature enables you to deploy landing zones across all
              clouds, manage a landing zone construction kit, and document
              landing zones for application teams and security stakeholders.
              Collie is a valuable resource in our Cloud Foundation Community
              inventory, offering an intuitive interface and expert support for
              a seamless and secure cloud deployment.
            </p>
            <div class="d-flex">
              <router-link to="#" class="btn btn-outline-primary btn-md">
                Collie
              </router-link>
              <router-link to="#" class="btn btn-outline-secondary btn-md ml-3">
                GitHub
              </router-link>
            </div>
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

main.open-source-tools-page {
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
    margin: 0 auto 68px;
    padding: 0 37px;
    background: black;
    border-radius: 100px;

    p {
      margin: 0;
      font-size: 20px;
      font-weight: 800;
    }
  }

  .card-list {
    margin: 120px 0;

    .card:last-child {
      margin-bottom: 0;
    }
  }

  .card {
    display: flex;
    align-items: flex-start;
    margin-bottom: 66px;

    img {
      margin-right: 80px;
      max-width: 386px;
    }

    &__content {
      h4 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        margin: 0;
      }

      p {
        margin: 30px 0;
        line-height: 28px;
        font-weight: 300;
      }
    }
  }

  @media (max-width: $small) {
    .cards {
      margin-bottom: 50px;
    }

    .card {
      margin-bottom: 30px;
      flex-direction: column;

      img {
        width: 100%;
        margin: 0 auto 30px;
        max-width: 350px;
      }
    }
  }
}
</style>
