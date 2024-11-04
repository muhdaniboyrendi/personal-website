<script setup>
import ProjectLists from './ProjectLists.vue';

const grasiusText = 'Application for student management and attendance system with QR Code.'
const onlineshopText = 'Simple online shop application with admin and customer pages.'
const noteAppText = 'Simple Notes App with features add, delete, archive, and search notes.'
const todoListAppText = 'Simple Todo List App with featues add, delete, and done todo.'
</script>

<template>
  <div class="row mt-5">
    <div class="col">
      <span data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500">
        Some projects I have worked on
      </span>
      <div class="row mt-3">
        <ProjectLists title="Grasius" :text="grasiusText" img="grasius.PNG" />
        <ProjectLists title="Online Shop" :text="onlineshopText" img="online-shop.PNG" />
      </div>
      <div class="row mb-5">
        <ProjectLists title="Note App" :text="noteAppText" img="notes.PNG" />
        <ProjectLists title="Todo List App" :text="todoListAppText" img="todo-list.PNG" />
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
