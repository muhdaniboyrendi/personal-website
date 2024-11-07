import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import animationPlugin from './plugins/animationPlugin';
import 'aos/dist/aos.css';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(animationPlugin);
app.use(pinia)
app.mount('#app')
