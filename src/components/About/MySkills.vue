<script setup>
import SkillItems from './SkillItems.vue';

const langItems = ['HTML', 'CSS', 'JavaScript', 'PHP']
const feItems = ['Vue JS', 'Bootstrap', 'Livewire']
const beItems = ['Laravel', 'MySQL', 'SQLite']
</script>

<template>
  <div class="row mt-5">
    <div class="col">
      <h2 data-aos="fade-up" data-aos-offset="200">Skills</h2>
    </div>
  </div>
  <div class="row mt-3 mb-5">

    <SkillItems title="Languages" :items="langItems" />
    <SkillItems title="Frontend" :items="feItems" />
    <SkillItems title="Backend" :items="beItems" />

  </div>
</template>

<style scoped>
h2 {
  color: #E5E9F0;
}
</style>
