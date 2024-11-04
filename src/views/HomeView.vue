<script setup>
import AboutPart from '@/components/Home/AboutPart.vue';
import HeroContent from '@/components/Home/HeroContent.vue';
import ProjectPart from '@/components/Home/ProjectPart.vue';
</script>

<template>
  <main class="home mt-5 pt-5">
    <div class="container">

      <HeroContent />
      <hr>
      <AboutPart />
      <hr>
      <ProjectPart />

    </div>
  </main>
</template>

<style scoped>
</style>
