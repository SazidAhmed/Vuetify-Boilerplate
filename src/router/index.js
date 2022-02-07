import Vue from 'vue'
import VueRouter from 'vue-router'

import GuestRoutes from './guest/guest'
import UserRoutes from './admin/users'
import DashboardRoutes from './admin/dashboard'
import ConfigRoutes from './admin/config'
import BlogRoutes from './admin/blog'

Vue.use(VueRouter)

//Auth Guard
const requireAuth = (to, from, next) => {
  //
}

// const requireNoAuth = (to, from, next) => {
//   let user = firebase.auth().currentUser
//   if (user) {
//     next({ name: 'Dashboard' })
//   } else {
//     next()
//   }
// }

const routes = [
  ...GuestRoutes,
  ...UserRoutes,
  ...DashboardRoutes,
  ...ConfigRoutes,
  ...BlogRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
