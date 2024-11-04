<script setup>
import { RouterView } from 'vue-router'
import MainNavbar from './components/Navbar/MainNavbar.vue'
import MainFooter from './components/Footer/MainFooter.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <MainNavbar />

    <main class="px-3">
      <RouterView />
    </main>

    <MainFooter />
  </div>
</template>

<style scoped>
div {
  background-color: #0A0F14;
}
</style>
