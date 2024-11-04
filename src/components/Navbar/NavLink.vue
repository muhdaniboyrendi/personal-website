<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['title', 'path'])

const path = props.path
</script>

<template>
  <li class="nav-item ms-2">
    <RouterLink :to="path" class="nav-link" aria-current="page"><span>{{ props.title }}</span></RouterLink>
  </li>
</template>

<style scoped>
li span {
  color: #E5E9F0;
}
li:hover {
  transition: ease-in 0.2s;
  transform: scale(1.05);
}
li:hover span {
  transition: ease-in 0.2s;
  color: #40d2ff;
}
</style>
