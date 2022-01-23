import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

const history = createWebHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Login',
      path: '/',
      component: Login
    }
  ]
})

export default router
