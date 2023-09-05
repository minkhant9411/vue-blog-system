import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateBlog from '../views/CreateBlog.vue'
import Detail from '../views/Detail.vue'
import tagDetail from '../views/tagDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create-blog',
    name: 'create-blog',
    component: CreateBlog
  },
  {
    path: '/blogs/:id',
    name: 'blog',
    component: Detail,
    props:true
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: tagDetail,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
