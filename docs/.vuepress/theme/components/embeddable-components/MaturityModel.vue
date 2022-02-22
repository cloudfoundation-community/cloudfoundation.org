<template>
    <div class="card">

        <div class="card-col">

         <TenantMgmt>

         </TenantMgmt>
        </div>


        <div class="card-col">
         <Iam>

         </Iam>
        </div>


        <div class="card-col">
         <Compliance> 

         </Compliance>
        </div>


        <div class="card-col">

            <ChargeBack>

            </ChargeBack>
       
        </div>


        <div class="card-col">

            <ServiceEcoSystem>

            </ServiceEcoSystem>
         
        </div>
     

      </div>


</template>



<script  >
import TenantMgmt from "./mm-components/TenantMgmt.vue";
import Iam from "./mm-components/Iam.vue";
import Compliance from "./mm-components/Compliance.vue";
import ChargeBack from "./mm-components/ChargeBack.vue";
import ServiceEcoSystem from "./mm-components/ServiceEcoSystem.vue";

export default {
  components: {
    TenantMgmt,
    Iam,
    Compliance,
    ChargeBack,
    ServiceEcoSystem
  }
};
</script>



<style >
.theme-default-content {
  max-width: 100% !important;
  padding: 0 !important;
}
h1,
.page-meta,
footer,
.footer {
  display: none !important;
}

.page {
  padding-bottom: 0 !important;
}
</style>
<style scoped lang="scss">
@media only screen and (max-width: 1200px) {
  .card-col {
    min-width: 25%;
  }
}
@media only screen and (max-width: 1024px) {
  .card-col {
    min-width: 33%;
  }
}
@media only screen and (max-width: 500px) {
  .card-col {
    min-width: 100%;
  }
}
.card {
  display: flex;
  background-color: #9fd9ec;
  padding-left: 75px;
  padding-right: 65px;
  flex-wrap: wrap;
  display: -webkit-inline-box;
}
.card .card-col {
  flex-grow: 1;
}
.card-col {
  max-width: 20%;
}
</style>
