<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['title', 'path'])

const path = props.path
</script>

<template>
  <li class="nav-item ms-2">
    <router-link :to="path" class="nav-link" active-class="active" aria-current="page"><span>{{ props.title }}</span></router-link>
  </li>
</template>

<style scoped>
li span {
  color: #E5E9F0;
}
li:hover {
  transition: ease-in 0.2s;
}
li:hover span {
  transition: ease-in 0.2s;
  color: #40d2ff;
}
li .active span{
  color: #40d2ff;
}
</style>
