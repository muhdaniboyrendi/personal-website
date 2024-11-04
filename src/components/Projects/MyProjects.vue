<script setup>
import ProjectLists from './ProjectLists.vue';

const grasiusText = 'Application for student management and attendance system with QR Code. Developed with Laravel, Livewire, Bootstrap'
const onlineshopText = 'Simple online shop application with admin and customer pages. Developed with Laravel, Bootstrap'
const noteAppText = 'Simple Notes App with features add, delete, archive, and search notes. Developed with React JS, Bootstrap'
const todoListAppText = 'Simple Todo List App with featues add, delete, and done todo. Developed with Vue JS, Bootstrap'
</script>

<template>
  <div class="row mt-5">
    <div class="col">
      <span data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500">
        Some projects I have worked on
      </span>
      <div class="row mt-3">
        <ProjectLists title="Grasius" :text="grasiusText" />
        <ProjectLists title="Online Shop" :text="onlineshopText" />
      </div>
      <div class="row">
        <ProjectLists title="Note App" :text="noteAppText" />
        <ProjectLists title="Todo List App" :text="todoListAppText" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  color: #E5E9F0;
}
span {
  color: #AAB6C5;
}
.card {
  background-color: #121B23;
}
.card-title {
  color: #E5E9F0;
}
.card-text {
  color: #AAB6C5;
}
</style>
