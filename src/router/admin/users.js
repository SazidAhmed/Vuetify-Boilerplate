import Admin from '@/layouts/Admin.vue'
import Profile from '@/views/adminportal/user/Profile.vue'

const UserRoutes = [
  {
    path: '/adminportal',
    component: Admin,
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
