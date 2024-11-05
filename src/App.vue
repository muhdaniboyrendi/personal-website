<script setup>
import { RouterView } from 'vue-router'
import MainNavbar from './components/Navbar/MainNavbar.vue'
import MainFooter from './components/Footer/MainFooter.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100 main-container">
    <MainNavbar />

    <main class="px-3">
      <RouterView />
    </main>

    <MainFooter />
  </div>
</template>

<style>
div {
  font-family: "Sniglet", system-ui;
}
.main-container {
  background-color: #0A0F14;
}
</style>
