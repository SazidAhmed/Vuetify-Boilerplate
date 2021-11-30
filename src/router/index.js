import Vue from 'vue'
import VueRouter from 'vue-router'

// Website 
import Website from '../layouts/Website.vue'
import Home from '../views/website/Home.vue'

// Admin Portal
import AdminPortal from '../layouts/AdminPortal.vue'
import Dashboard from '../views/adminportal/Dashboard.vue'
import Settings from '../views/adminportal/Settings.vue'
import Profile from '../views/adminportal/user/Profile.vue'

import Blog from '../views/adminportal/blog/Blog.vue'


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
  //Website
  {
    path: '/',
    component: Website,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        // beforeEnter: requireNoAuth
      },
    ]
  },

  //Admin Portal
  {
    path: '/adminportal',
    component: AdminPortal,
    children:[
      {
        path: '',
        name: 'Dashboard',
        component:Dashboard,
        
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
       
      },
      {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        
      },
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
