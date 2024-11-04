<script setup>
const props = defineProps(['title', 'text'])
</script>

<template>
  <div class="col-md-6 mb-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">
    <div class="card">
      <img src="" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ props.title }}</h5>
        <p class="card-text">{{ props.text }}</p>
        <RouterLink to="/projects" class="btn mt-3 project-view" aria-current="page">Learn more &raquo;</RouterLink>
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
