import Vue from 'vue'
import VueRouter from 'vue-router'
const vAccount = () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
const vLogin = () => import(/* webpackChunkName: "account" */ '../views/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'account',
    component: vAccount
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: vLogin
  }
]

console.log('process.env.BASE_URL', process.env.BASE_URL)

const router = new VueRouter({
  mode: 'history',
  base: '/account',
  routes
})

export default router
