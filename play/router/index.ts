import { createRouter, createWebHistory } from 'vue-router'
import button from '../view/button/index.vue'
import icon from '../view/icon/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/button',
      name: 'home',
      component: button
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    },
    {
      path: '/',
      name: 'icon',
      component: icon
    }
  ]
})

export default router
