import AdminPortal from '@/layouts/AdminPortal.vue'
import Settings from '@/views/adminportal/Settings.vue'

const ConfigRoutes = [
  {
    path: '/adminportal',
    component: AdminPortal,
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
