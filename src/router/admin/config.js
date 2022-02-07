import Admin from '@/layouts/Admin.vue'
import Settings from '@/views/adminportal/Settings.vue'

const ConfigRoutes = [
  {
    path: '/adminportal',
    component: Admin,
    children:[
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
       
      },
    ]
  },
]

export default ConfigRoutes
