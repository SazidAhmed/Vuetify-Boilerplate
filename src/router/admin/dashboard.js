import Admin from '@/layouts/Admin.vue'
import Dashboard from '@/views/adminportal/Dashboard.vue'

const DashboardRoutes = [
  {
    path: '/adminportal',
    component: Admin,
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
