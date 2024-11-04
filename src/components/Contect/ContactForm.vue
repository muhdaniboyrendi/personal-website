<script setup>
import { ref } from 'vue'

// Constants
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyzH7zYjHXVDsB0DjIncPO3smukF9iBAHfGR6dmMC0DK8rNrUMrX18XAuskm-YkFF9S2g/exec'

// Refs
const contactForm = ref(null)
const isLoading = ref(false)
const showAlert = ref(false)

// Methods
const handleSubmit = async () => {
  try {
    // Tampilkan loading state
    isLoading.value = true

    // Kirim data form
    const formData = new FormData(contactForm.value)
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    // Reset form
    contactForm.value.reset()

    // Tampilkan alert success
    showAlert.value = true

    // Log success
    console.log('Success!', response)
  } catch (error) {
    // Handle error
    console.error('Error!', error.message)
    // Opsional: tambahkan state untuk menampilkan error alert
  } finally {
    // Sembunyikan loading state
    isLoading.value = false
  }
}
</script>

<template>
  <div class="row my-5">
    <div class="col-md-7" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500">
      <div class="card">
        <div class="card-body p-3">

          <div class="alert alert-dismissible fade show mt-1" role="alert" :class="{ 'd-none': !showAlert }">
            Your message has been sent successfully!
            <button type="button" class="btn-close" @click="showAlert = false">
            </button>
          </div>

          <form @submit.prevent="handleSubmit" ref="contactForm">
            <div class="mb-3">
              <label for="nama" class="form-label">Your Name</label>
              <input type="text" name="nama" class="form-control" id="nama" placeholder="Type your Name">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" name="email" class="form-control" id="email" placeholder="Type your email">
            </div>
            <div class="mb-3">
              <label for="pesan" class="form-label">Message</label>
              <textarea name="pesan" id="pesan" class="form-control" rows="5"></textarea>
            </div>

            <!-- button submit -->
            <button type="submit" class="btn btn-primary btn-kirim " :class="{ 'd-none': isLoading }">Send
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
              </svg>
            </button>

            <!-- button loading -->
            <button class="btn btn-primary btn-loading" type="button" :class="{ 'd-none': !isLoading }" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Sending...
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-5">
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #121B23;
  border: 1px solid #309EC7;
}
label {
  color: #E5E9F0;
}
.form-control {
  background-color: #0A0F14;
  border: 1px solid #309EC7;
  color: #AAB6C5;
}
.btn {
  background-color: #121B23;
  border: 1px solid #309EC7;
  color: #E5E9F0;
}
.btn:hover {
  background-color: #309EC7;
  border: 1px solid #309EC7;
  color: #121B23;
}
.alert {
  background-color: #002214;
  border: 1px solid #00ff95;
  color: #E5E9F0;
}
.btn-close {
  color: #E5E9F0;
}
</style>
