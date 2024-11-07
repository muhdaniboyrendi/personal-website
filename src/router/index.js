import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'Muhdani Boyrendi Erlan Azhari | About' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: { title: 'Muhdani Boyrendi Erlan Azhari | Projects' },
    },
    {
      path: '/projects/:id',
      name: 'project-details',
      component: () => import('../components/Projects/ProjectDetails.vue'),
      props: true,
      meta: { title: 'Muhdani Boyrendi Erlan Azhari | Projects' },
    },
    {
      path: '/equipments',
      name: 'equipments',
      component: () => import('../views/EquipmentsView.vue'),
      meta: { title: 'Muhdani Boyrendi Erlan Azhari | Equipments' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Muhdani Boyrendi Erlan Azhari | Contact' },
    },
  ],
})

export default router
