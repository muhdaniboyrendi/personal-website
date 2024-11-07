<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'

const publicPath = import.meta.env.BASE_URL
const route = useRoute()
const projectStore = useProjectStore()

const currentProject = computed(() =>
  projectStore.selectedProject || projectStore.getProjectById(route.params.id)
)

const imagePaths = `${publicPath}images/`
const sourceCode = currentProject.value.source
</script>

<template>
  <div class="container" v-if="currentProject">
    <h1 class="my-5 pt-5">{{ currentProject.title }}</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card p-3 mb-4">
          <img :src="imagePaths+ '/' +currentProject.img" alt="project">
        </div>
      </div>
      <div class="col">
        <p>{{ currentProject.description }}</p>
        <div class="row mb-4">
          <div class="col">
            <a :href="sourceCode" target="_blank" class="source-code">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github me-2" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              Source Code
            </a>
          </div>
        </div>
        <span>Stack :</span>
        <ul>
          <li v-for="(tech, index) in currentProject.tech" :key="index">{{ tech }}</li>
        </ul>
      </div>
    </div>
    <router-link :to="{ name: 'projects' }" class="btn">Kembali</router-link>
  </div>
</template>

<style scoped>
h1 {
  color: #E5E9F0;
}
.card {
  background-color: #121B23;
  border: 1px solid #309EC7;
  border-radius: 20px;
}
img {
  border: 1px solid #309EC7;
  border-radius: 10px;
}
p, span, li {
  color: #E5E9F0;
}
.source-code {
  color: #E5E9F0;
  text-decoration: none;
}
a:hover {
  color: #40D2FF;
  text-decoration: underline;
}
.btn {
  border: 1px solid #40D2FF;
  color: #40D2FF;
  transition: ease 0.2;
  border-radius: 10px
}
.btn:hover {
  border: 1px solid #40D2FF;
  background-color: #40D2FF;
  color: #121B23;
  transition: ease 0.2;
  box-shadow: 0 0 5px #40D2FF;
}
</style>
