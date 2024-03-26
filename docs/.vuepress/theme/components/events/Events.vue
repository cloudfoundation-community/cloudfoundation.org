<template>
  <main class="events-page">
    <div class="head-section">
      <div class="head-container d-flex">
        <img class="w-100 h-100" src="./events_bg.svg" alt="Event" />
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
            <img src="./LiveDemo_Wulf.webp" alt="Live Demo" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>meshStack Live Demo (livestream) - April 10th, 14:00 - 15:00 (CET) </h4>
              <p>
                Tune in to our meshStack live demo on YouTube to learn more about meshStack's capabilities and see it in action.
                Subscribe to our channel to stay updated.
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/live-demo/"
                class="btn btn-outline-primary btn-lg"
              >
                Subscribe!
              </a>
            </div>
          </div>
          
          <div class="event-card">
            <img src="./CloudSS_Thumbnail.webp" alt="Cloud Success Stories" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>
                Cloud Success Stories - April 17th, 10:00-14:00
                (CET)
              </h4>
              <p>
                Our customer Rheinenergie will demo how they achieved successful 
		            deployment of their first S4-HANA System on Amazon Web Services (AWS). 
		            This achievement represents a significant milestone in their cloud journey, 
		            made possible by the unwavering support of meshcloud.io and StackGuardian.
              </p>
              <a
                href="https://cloudsuccessstories.splashthat.com/"
                class="btn btn-outline-primary btn-lg"
              >
                Register Now!
              </a>
            </div>
          </div>

          <div class="event-card">
            <img src="./LZ101_Flo.webp" alt="Landing Zone Workshop" style="border-radius: 45px;"/>
            <div class="event-card__content">
              <h4>
                Cloud Landing Zone 101 (English) - April 24th, 10:00-12:00
                (CET)
              </h4>
              <p>
                In this 2-hour practical workshop, we will delve into the fundamental 
                aspects of landing zones and the target image Cloud Foundation. 
                You will discover best practices and Cloud-Native Tools designed for 
                the seamless establishment of landing zones across AWS, Azure, and GCP.
              </p>
              <a
                href="https://www.meshcloud.io/en/company/events/landing-zone-101/"
                class="btn btn-outline-primary btn-lg"
              >
                Register Now!
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <div class="past-events">
        <h3 class="sub-title">Past Events</h3>
        <div class="past-event-list">
          <div class="event-card">
            <img src="./CFC_Event.webp" alt="Event Community" />
            <div class="event-card__content">
              <h4>Cloud Foundation Community-Event (English) - December 14th,
                15:00-16:30 (CET)</h4>
              <p>
                In that Community Event we focused on
                people, culture and community in cloud foundations.
              </p>
            </div>
          </div>

          <div class="event-card">
            <img src="./LZ102.webp" alt="Event Community" />
            <div class="event-card__content">
              <h4>Cloud Landing Zone 102 (English) - December 13th, 14:00-16:30
                (CET)</h4>
              <p>
                In this high-demanded 2.5-hour practical workshop, we showed how to
                build a repeatable Landing Zone workflow for application
                deployment, including network and Virtual Machine (VM) in Azure.
              </p>
            </div>
          </div>

          <div class="event-card">
            <img src="./dev_ops_con.svg" alt="DevOpsCon" />
            <div class="event-card__content">
              <h4>
                DevOpsCon - June 13th, 9:00-20:00 & June 14th, 9:00-16:45 (CEST)
              </h4>
              <p>
                meshcloud will be at the DevOpsCon in Berlin! Catch us at the
                event for our talk or swing by the meshcloud booth. 🐑
              </p>
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
