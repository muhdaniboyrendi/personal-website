import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import animationPlugin from './plugins/animationPlugin';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(router)

app.use(animationPlugin);

app.mount('#app')
