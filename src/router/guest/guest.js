
import Guest from '@/layouts/Guest.vue'
import Home from '@/views/guest/Home.vue'

const GuestRoutes = [
  //Website
  {
    path: '/',
    component: Guest,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        // beforeEnter: requireNoAuth
      },
    ]
  }
]
export default GuestRoutes
