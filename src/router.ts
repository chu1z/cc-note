import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const history = createWebHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: { requiredLogin: true }
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: { redirectAleadyLogin: true }
    },
    {
      name: 'register',
      path: '/register',
      component: Register,
      meta: { redirectAlreadyLogin: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { user } = store.state
  // TODO to.meta.redirectAlreadyLogin这个值会为underfind
  if (!user.isLogin && to.meta.requiredLogin) {
    next('login')
  } else if (user.isLogin && to.meta.redirectAlreadyLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
