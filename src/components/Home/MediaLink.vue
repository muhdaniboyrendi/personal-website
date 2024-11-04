<script setup>
const props = defineProps(['media'])
const medias = props.media
</script>

<template>
  <a :href="medias.urls[0]" class="me-4 social__media" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16" v-html="medias.svgs[0]"></svg>
  </a>
  <a :href="medias.urls[1]" class="me-4 social__media" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16" v-html="medias.svgs[1]"></svg>
  </a>
  <a :href="medias.urls[2]" class="me-4 social__media" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16" v-html="medias.svgs[2]"></svg>
  </a>
  <a :href="medias.urls[3]" class="me-4 social__media" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16" v-html="medias.svgs[3]"></svg>
  </a>
  <a :href="medias.urls[4]" class="me-4 social__media" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16" v-html="medias.svgs[4]"></svg>
  </a>
  <a :href="medias.urls[5]" class="me-4 social__media" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16" v-html="medias.svgs[5]"></svg>
  </a>
</template>

<style scoped>
.social__media {
  text-decoration: none;
  color: #E5E9F0;
}

.social__media:hover svg {
  transform: scale(1.2);
  color: #40d2ff;
  transition: ease-in 0.2s;
}
</style>
