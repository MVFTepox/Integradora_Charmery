import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '@/views/Abaut.vue'
import acceso from '@/views/formularioRI.vue'
import iniciarseccion from '@/components/incioeRegistro/iniciarseccion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/acceso',
      name: 'acceso',
      component: acceso
    },
    {
      path: '/iniciarseccion',
      name: 'iniciarseccion',
      component: iniciarseccion
    }
  ]
})

export default router
