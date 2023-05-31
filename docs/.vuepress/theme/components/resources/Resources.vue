<template>
  <main class="resources-page">
    <div class="head-container d-flex">
      <img class="w-100 h-100" src="./resources_bg.svg" alt="Resources" />
    </div>
    <div class="alert-box bg-black d-flex align-items-center">
      <p class="text-white">Resources</p>
    </div>
    <div class="container">
      <div>
        <h3 class="sub-title">The Cloud Foundation’s Resources</h3>
        <p>
          Welcome to the Community’s resources page, your go-to destination for
          knowlede and open-source tools designed to build a cloud foundation.
          Whether you're just starting out or looking to enhance your existing
          setup, we've got you covered with a range of insights and practical
          resources. Browse our articles and tools to learn more.
        </p>
      </div>
      <div class="resource-list">
        <div class="resource-card">
          <img src="./understanding_cf.svg" alt="Understanding CF" />
          <div class="resource-card__content">
            <h4>Cloud Foundation Knowledge Hub</h4>
            <p>
              A Cloud Foundation is an organization’s strategic approach to
              mastering its cloud transformation. This approach has two major
              aspects: An organizational and a technological one. Following the
              Cloud Foundation approach means putting application teams at the
              center and providing them with a single point of access for the
              management of their cloud infrastructure...
            </p>
            <router-link to="#" class="btn btn-outline-primary btn-lg">
              What Is A Cloud Foundation
            </router-link>
          </div>
        </div>

        <div class="resource-card">
          <img src="./tools.svg" alt="Tools" />
          <div class="resource-card__content">
            <h4>Open-Source Tools</h4>
            <p>
              Open-source tools can be a game-changer when it comes to
              simplifying complex processes and achieving successful
              implementation. That's why we are proud to offer a range of
              open-source tools that can help you streamline your processes,
              minimize implementation risks and ultimately, accelerate your
              cloud journey...
            </p>
            <router-link to="#" class="btn btn-outline-primary btn-lg">
              Take Me To Them
            </router-link>
          </div>
        </div>

        <div class="resource-card">
          <img src="./newsletter.svg" alt="Newsletter" />
          <div class="resource-card__content">
            <h4>Cloud-Natives Newsletter</h4>
            <p>
              Are you interested in keeping up-to-date with the latest
              developments, best practices, resources and insights of the Cloud
              Foundation Community and all kinds of cloud topics, such as Cloud
              Landing Zones, Cloud Cost Management and Cloud Security? Subscribe
              to our monthly newsletter and gain access to exclusive content.
            </p>
            <router-link to="#" class="btn btn-outline-primary btn-lg">
              Sign Up!
            </router-link>
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

main.resources-page {
  padding-top: calc(var(--navbar-height) * 1.5);
  font-size: 18px;

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

  .resource-list {
    margin-top: 108px;
    margin-bottom: 139px;

    .resource-card {
      display: flex;
      margin-bottom: 66px;

      img {
        margin-right: 80px;
        max-width: 290px;
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
        }
      }
    }

    @media (max-width: $small) {
      margin: 40px 0;

      .resource-card {
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
}
</style>
