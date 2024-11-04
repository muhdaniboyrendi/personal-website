<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['title', 'path'])

const path = props.path
</script>

<template>
  <li class="nav-item">
    <RouterLink :to="path" class="nav-link" aria-current="page"><span>{{ props.title }}</span></RouterLink>
  </li>
</template>

<style scoped>
li span {
  color: #AAB6C5;
}
li:hover span {
  transform: scale(1.2);
  color: #40d2ff;
  transition: ease-in 0.2s;
}
</style>
