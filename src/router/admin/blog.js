import AdminPortal from '@/layouts/AdminPortal.vue'
import Blog from '@/views/adminportal/blog/Blog.vue'

const BlogRoutes = [
  {
    path: '/adminportal',
    component: AdminPortal,
    children:[
      {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        
      },
    ]
  },
]

export default BlogRoutes
