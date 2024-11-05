<script setup>
const publicPath = import.meta.env.BASE_URL

const props = defineProps(['title', 'text', 'img', 'param'])

const imagePaths = `${publicPath}images/${props.img}`
const path = `/projects/${props.param}`
</script>

<template>
  <div class="col-md-6 mb-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">
    <div class="card">
      <img :src="imagePaths" alt="project" class="m-3 mb-0">
      <div class="card-body">
        <h5 class="card-title">{{ props.title }}</h5>
        <p class="card-text">{{ props.text }}</p>
        <RouterLink :to="path" class="btn project-view" aria-current="page">Learn more &raquo;</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #121B23;
  border: 1px solid #309EC7;
  border-radius: 20px;
}
img {
  border: 1px solid #309EC7;
  border-radius: 10px
}
.card-title {
  color: #E5E9F0;
}
.card-text {
  color: #AAB6C5;
}
.project-view {
  border: 1px solid #309EC7;
  color: #309EC7;
  border-radius: 10px;
}
.project-view:hover {
  background-color:#309EC7;
  color: #0A0F14 ;
  box-shadow: 0 0 10px #309EC7;
}
</style>
