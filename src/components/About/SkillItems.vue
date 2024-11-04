<script setup>
const props = defineProps(['title', 'items'])
</script>

<template>
  <div class="col-md-4 mb-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">
    <div class="card">
      <div class="card-body">
        <h5>{{ props.title }}</h5>
        <hr>
        <ul>
          <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  color: #E5E9F0;
}
li {
  color: #AAB6C5;
}
.card {
  background-color: #121B23 ;
  border: 1px solid #309EC7;
}
hr {
  color: #E5E9F0;
}
</style>
