import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/standards', name: 'Standards', component: () => import('../pages/Standards.vue') },
  { path: '/interpretations', name: 'Interpretations', component: () => import('../pages/Interpretations.vue') },
  { path: '/implementation', name: 'Implementation', component: () => import('../pages/Implementation.vue') },
  { path: '/guidance', name: 'Guidance', component: () => import('../pages/Guidance.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router