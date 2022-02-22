<template>
  
    <a :href="link">
        <div class="each-card">
          <div class="card-step">
            <img :src="$withBase('/mm/journey-stage-' + step + '.svg')" alt="" />
          </div>
          <div class="card-scope">
            <img :src="$withBase('/mm/scope-cube-' + scope + '.svg')" alt="" />
          </div>  

          <div class="card-content">
            <p v-text="title"></p>
          </div>
        </div>
    </a>
     

</template>

<script>
export default {
  props: {
    step: String,
    scope: String,
    title: String,
    link: String
  }
};
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none !important;
}
.each-card {
  background-color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  margin: 0 10px 10px 0;
  height: 55px;
  border-radius: 8px;
}
.card-content {
  min-height: 45px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 0;
}
.card-content p {
  font-size: 10px;
  font-weight: 800;
  color: #2d3e4f;
  width: 100%;
}
.card-step {
  min-width: 15px;
  max-width: 15px;
}

.card-scope {
  min-width: 33px;
  max-width: 33px;
  margin-right: 10px;
}

.card-step img {
  width: 100%;
}

.card-scope img {
  width: 100%;
}
</style>