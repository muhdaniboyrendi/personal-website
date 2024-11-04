<script setup>
import AboutMe from '@/components/About/AboutMe.vue';
import MyExperience from '@/components/About/MyExperience.vue';
import MySkills from '@/components/About/MySkills.vue';

</script>

<template>
  <div class="about mt-5 pt-5">
    <div class="container">
      <h1 data-aos="fade-up" data-aos-offset="300">About</h1>

        <AboutMe />
        <hr>
        <MySkills />
        <hr>
        <MyExperience />

    </div>
  </div>
</template>

<style>
h1 {
  color: #E5E9F0;
}
</style>
