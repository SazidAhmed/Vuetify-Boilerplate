import Admin from '@/layouts/Admin.vue'
import Blog from '@/views/adminportal/blog/Blog.vue'

const BlogRoutes = [
  {
    path: '/adminportal',
    component: Admin,
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
