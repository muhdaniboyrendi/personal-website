<script setup>
import NavLink from './NavLink.vue'
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg">
    <div class="container p-1">
      <button class="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink title="Home" path="/" />
          <NavLink title="About" path="/about" />
          <NavLink title="Projects" path="/projects" />
          <NavLink title="Equipments" path="/equipments" />
          <NavLink title="Contact" path="/contact" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: #121B23 ;
  box-shadow: 0 0 15px #40d2ff;
  opacity: 0.8;
}
button svg {
  color: #40d2ff;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(64, 210, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-toggler {
  border: 2px solid #40d2ff;
}
</style>
