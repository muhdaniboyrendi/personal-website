<script setup>
const publicPath = import.meta.env.BASE_URL

const props = defineProps(['title', 'text', 'img'])

const imagePaths = `${publicPath}images/${props.img}`
</script>

<template>
  <div class="col-md-6 mb-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">
    <div class="card">
      <img :src="imagePaths" alt="project" class="m-3">
      <div class="card-body">
        <h5 class="card-title">{{ props.title }}</h5>
        <p class="card-text">{{ props.text }}</p>
        <RouterLink to="/projects" class="btn project-view" aria-current="page">Learn more &raquo;</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #121B23;
  border: 1px solid #309EC7;
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
}
.project-view:hover {
  background-color:#309EC7;
  color: #0A0F14 ;
}
</style>
