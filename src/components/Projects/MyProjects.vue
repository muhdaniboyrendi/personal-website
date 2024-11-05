<script setup>
import ProjectLists from './ProjectLists.vue';

const projectDatas = [
  {
    grasius: [
      {
        title: 'Grasius',
        text: 'Application for student management and attendance system with QR Code.',
        img: 'grasius.PNG',
        param: 'grasius',
        tech: ['Laravel', 'Livewire', 'Bootstrap'],
      }
    ],
    onlineShop: [
      {
        title: 'Online Shop',
        text: 'Simple online shop application with admin and customer pages.',
        img: 'online-shop.PNG',
        param: 'online-shop',
        tech: ['Laravel', 'Bootstrap'],
      }
    ],
    noteApp: [
      {
        title: 'Note App',
        text: 'Simple Notes App with features add, delete, archive, and search notes.',
        img: 'notes.PNG',
        param: 'note-app',
        tech: ['React JS', 'Bootstrap'],
      }
    ],
    todoApp: [
      {
        title: 'Todo List App',
        text: 'Simple Todo List App with featues add, delete, and done todo.',
        img: 'todo-list.PNG',
        param: 'todo-app',
        tech: ['Vue JS', 'Bootstrap'],
      }
    ],
  }
]
</script>

<template>
  <div class="row mt-5">
    <div class="col">
      <span data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500">
        Some projects I have worked on
      </span>
      <div class="div" v-for="(projectData, index) in projectDatas" :key="index">
        <div class="row mt-3">
          <ProjectLists :datas="projectData.grasius" />
          <ProjectLists :datas="projectData.onlineShop" />
        </div>
        <div class="row mb-5">
          <ProjectLists :datas="projectData.noteApp" />
          <ProjectLists :datas="projectData.todoApp" />
        </div>
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
