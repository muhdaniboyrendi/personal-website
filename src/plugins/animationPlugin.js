import AOS from 'aos';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export default {
  install(app) {
    AOS.init({ once: true });

    app.config.globalProperties.$aos = AOS;
    app.config.globalProperties.$gsap = gsap;
  }
};
