import AdminPortal from '@/layouts/AdminPortal.vue'
import Profile from '@/views/adminportal/user/Profile.vue'

const UserRoutes = [
  {
    path: '/adminportal',
    component: AdminPortal,
    children:[
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        
      },
    ]
  },
]

export default UserRoutes
