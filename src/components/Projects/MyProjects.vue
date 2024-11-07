<script setup>
import { useRouter } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'

const publicPath = import.meta.env.BASE_URL
const router = useRouter()
const projectStore = useProjectStore()

const goToDetail = (project) => {
  projectStore.setSelectedProject(project)
  router.push({
    name: 'project-details',
    params: { id: project.id }
  })
}

const imagePaths = `${publicPath}images/`
</script>

<template>
  <div class="row mt-5">
    <div class="col">
      <span data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500">
        Some projects I have worked on
      </span>
      <div class="div">
        <div class="row mt-3">
          <div class="col-md-6 mb-4" v-for="project in projectStore.projects" :key="project.id" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">
            <div class="card">
              <img :src="imagePaths+ '/' +project.img" alt="project" class="m-3 mb-0">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <button class="btn project-view" @click="goToDetail(project)">Learn more &raquo;</button>
              </div>
            </div>
          </div>
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
  border: 1px solid #309EC7;
  border-radius: 20px;
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
