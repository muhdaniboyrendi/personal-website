<script setup>
const publicPath = import.meta.env.BASE_URL

const imagePaths = {
  grasius: `${publicPath}images/grasius.PNG`,
  onlineShop: `${publicPath}images/online-shop.PNG`,
  icon: `${publicPath}images/icons/icon1.svg`
}
</script>

<template>
  <div class="row mt-5">
    <div class="col">
      <h3 data-aos="fade-up" data-aos-offset="200">Latest Projects</h3>
    </div>
  </div>
  <RouterLink to="/projects" class="nav-link my-3" aria-current="page"><button class="btn btn-sm" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">View all projects &raquo;</button></RouterLink>
  <div class="card-list">
    <div class="row mt-3 mb-5">
      <div class="col-md-6 mb-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">
        <div class="card">
          <img :src="imagePaths.grasius" alt="project" class="m-3">
          <div class="card-body">
            <h5 class="card-title">Grasius</h5>
            <p class="card-text">Application for student management and attendance system with QR Code. Developed with Laravel, Livewire, Bootstrap</p>
            <RouterLink to="/projects" class="btn project-view" aria-current="page">Learn more &raquo;</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">
        <div class="card">
          <img :src="imagePaths.onlineShop" alt="project">
          <div class="card-body">
            <h5 class="card-title">Online Shop</h5>
            <p class="card-text">Simple online shop application with admin and customer pages. Developed with Laravel, Bootstrap</p>
            <RouterLink to="/projects" class="btn project-view" aria-current="page">Learn more &raquo;</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  color: #E5E9F0;
}
p {
  color: #E5E9F0;
}
button {
  color: #40D2FF;
  border: 1px solid #40D2FF;
  transition: 0.2s ease;
}
button:hover {
  background-color: #40D2FF;
}
.card {
  background-color: #121B23;
  border: 1px solid #309EC7;
  transition: all 0.3s ease;
}
.card-title {
  color: #E5E9F0;
}
.card-text {
  color: #AAB6C5;
}
.project-view {
  border: 1px solid #309EC7;
  color: #309EC7;
}
.project-view:hover {
  background-color:#309EC7;
  color: #0A0F14 ;
}
</style>
