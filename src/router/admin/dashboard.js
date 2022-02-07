import AdminPortal from '@/layouts/AdminPortal.vue'
import Dashboard from '@/views/adminportal/Dashboard.vue'

const DashboardRoutes = [
  {
    path: '/adminportal',
    component: AdminPortal,
    children:[
      {
        path: '',
        name: 'Dashboard',
        component:Dashboard,
      },
    ]
  },
]

export default DashboardRoutes
