
import Website from '@/layouts/Website.vue'
import Home from '@/views/website/Home.vue'
import Register from '@/views/account/Register.vue'

const GuestRoutes = [
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
  {
    path: '/register',
    component: Register,
    name: 'Register'
  },
]
export default GuestRoutes
