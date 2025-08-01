<template>
  <main class="events-page">
    <div class="head-section">
      <div class="head-container d-flex">
        <img class="w-100 h-100" style="border-radius: 45px;" src="./events_bg.svg" alt="Event" />
      </div>
      <div class="alert-box bg-black d-flex align-items-center">
        <p class="text-white">Events</p>
      </div>
    </div>
    <div class="container">
      <div>
        <h3 class="sub-title">The Community’s Exciting Events Lineup</h3>
        <p>
          Welcome to Cloud Foundation's exciting events lineup! We believe that
          events are a great way to connect with technology enthusiasts and
          share insights and ideas. While the pandemic has changed the way we
          meet, we're thrilled to offer a variety of online and onsite events
          where we can engage in conversations, exchange about the latest trends
          and learn from succesful cloud-experts.
        </p>
      </div>
      <div class="upcoming-events">
        <h3 class="sub-title">Upcoming Events</h3>
        <div class="upcoming-event-list">  

          <div class="event-card">
            <img src="./LZ101_Flo.webp" alt="Landing Zone Workshop" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>
                Azure Landing Zones: From Request to Scalable Cloud Environments (English) - July 9th, 10am - 12pm (CEST)
              </h4>
              <p>
                In this 2-hour practical workshop, we delve into the crucial 
                aspects of landing zones and the target image Cloud Foundation. 
                We also discover the best practices and Cloud-Native Tools designed for 
                the seamless establishment of landing zones across Azure.
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/azure-landing-zone/"
                class="btn btn-outline-primary btn-lg"
              >
                Register
              </a>
            </div>
          </div>
          
          <div class="event-card">
            <img src="./PlatformStories.webp" alt="Platform Stories" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>
                Platform Stories (German) - July 17th, 10-11 am (CEST)
              </h4>
              <p>
                This live video podcast by meshcloud co-founders, Jörg and Christina, 
                will feature insightful conversations with external guests, 
                diving deep into their journeys of building successful platforms.
              </p>
              <a
                href="https://www.meshcloud.io/de/unternehmen/events/plattform-stories/"
                class="btn btn-outline-primary btn-lg"
              >
                Register
              </a>
            </div>
          </div>

          <div class="event-card">
            <img src="./BID_Event.webp" alt="Internal Developer Polatform" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4> Building an Internal Developer Platform with meshStack (English) - July 30th, 10-11 am (CEST) </h4>
              <p>
                Learn which steps and tools can empower your developers, 
                allowing them to focus on what really counts – writing code 
                and delivering digital products faster.
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/building-an-internal-developer-platform-with-meshstack"
                class="btn btn-outline-primary btn-lg"
              >
                Sign up
              </a>
            </div>
          </div>
          
          <div class="event-card">
            <img src="./meshcloud-Con25.webp" alt="meshcloud Con 25" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>
                meshcloud Con '25 (English) - September 18th, 9am - 17pm (CEST)
              </h4>
              <p>
                In various interactive formats, meshcloud Con '25 is designed to offer
                a great environment for sharing experiences to explore the future 
                of building internal platforms. Driven by the Cloud Foundation Community, 
                it is a great opportunity to get inspired and learn from other platform teams.
              </p>
              <a
                href="https://con25.meshcloud.io"
                class="btn btn-outline-primary btn-lg"
              >
                Register 
              </a>
            </div>
          </div>

        </div>
      </div>
      <div class="past-events">
        <h3 class="sub-title">Past Events</h3>
        <div class="past-event-list">

          <div class="event-card">
            <img src="./GO3.webp" alt="Self-Service Developer Portal" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>Fueling Developer Autonomy: Building a Self-Service Culture with a Developer Portal (English)</h4>
              <p>
                Learn which steps and tools can empower your developers, 
                allowing them to focus on what really counts – writing code 
                and delivering digital products faster.
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/building-a-self-service-culture-with-a-developer-portal/"
                class="btn btn-outline-primary btn-lg"
              >
                Set Alarm
              </a>
            </div>
          </div>
          
          <div class="event-card">
            <img src="./GO2_March25.webp" alt="Platform Workshop" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>
                Scaling Without Silos: How to Build Internal Platforms Without Losing Control (English)
              </h4>
              <p>
                Struggling with central cloud management while maintaining
                security and cost efficiency? Join our 1-hour webinar 
                and learn how to uphold standards without stifling the autonomy
                of the platform teams!
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/webinar-internal-platform-teams/"
                class="btn btn-outline-primary btn-lg"
              >
                Set Alarm
              </a>
            </div>
          </div>
          
          <div class="event-card">
            <img src="./GO1_new.webp" alt="GitOps Workshop" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>
                Seamless GitOps: IaC Provisioning as Easy as Online Shopping (English)
              </h4>
              <p>
                Join our express webinar to learn 
                how to bridge the gap between what you’ve built 
                and the usability requirements of the application teams.
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/gitops-easy-as-online-shopping-webinar/"
                class="btn btn-outline-primary btn-lg"
              >
                Set Alarm
              </a>
            </div>
          </div>

          <div class="event-card">
            <img src="./LZ102_Flo.webp" alt="Landing Zone 102" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>Cloud Landing Zone 102 (English)</h4>
              <p>
                In this 2-hour practical workshop, we show how to
                build a repeatable Landing Zone workflow for application
                deployment, including network and Virtual Machine (VM) in Azure.
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/landingzone-102/"
                class="btn btn-outline-primary btn-lg"
              >
                Set Alarm
              </a>
            </div>
          </div>
          
          <div class="event-card">
            <img src="./GO4-Scoping.webp" alt="Platform Scoping" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>Precise Scoping for Smooth Platform Adoption (English)</h4>
              <p>
                In this 1-hour express webinar you'll
                discover practical strategies for defining 
                and scoping your platform’s key capabilities based on user needs.
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/platform-scoping/"
                class="btn btn-outline-primary btn-lg"
              >
                Set Alarm
              </a>
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

main.events-page {
  font-size: 18px;

  .head-section {
    padding: 0 15px;
  }

  h3.sub-title {
    font-weight: 700;
    font-size: 2rem;
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

  .upcoming-events {
    margin-top: 133px;

    .upcoming-event-list {
      background: #d4f0fa;
      border-radius: 30px;
      padding: 68px 76px;
      margin-top: 68px;

      .event-card:last-child {
        margin-bottom: 0;
      }
    }
  }

  .past-events {
    margin-top: 61px;
    margin-bottom: 138px;

    .past-event-list {
      margin-top: 68px;

      .event-card:last-child {
        margin-bottom: 0;
      }
    }
  }

  .event-card {
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

  @media (max-width: 992px) {
    .upcoming-event-list {
      .event-card {
        flex-direction: column;

        img {
          margin: 0 auto 30px;
        }
      }
    }
  }

  @media (max-width: $small) {
    .upcoming-events {
      margin-top: 50px;
    }

    .past-events {
      margin-bottom: 50px;
    }

    .upcoming-event-list {
      padding: 20px !important;
    }

    .event-card {
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
