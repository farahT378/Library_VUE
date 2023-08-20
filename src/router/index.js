import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/about.vue'
import UsersHome from '../views/UsersHome.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/UsersHome',
    name: 'UsersHome',
    component: UsersHome,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router