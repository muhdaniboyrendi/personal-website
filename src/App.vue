<script setup>
import { RouterView, useRoute } from 'vue-router'
import { watchEffect } from 'vue';
import MainNavbar from './components/Navbar/MainNavbar.vue'
import MainFooter from './components/Footer/MainFooter.vue'

const route = useRoute();

watchEffect(() => {
  const defaultTitle = 'Muhdani Boyrendi Erlan Azhari';
  document.title = route.meta.title || defaultTitle;
});
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
