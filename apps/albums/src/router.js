import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Photos from '@/views/Photos'

const routes = [
  { name: 'home', path: '/albums', component: Home },
  {
    name: 'photos',
    path: '/albums/:id/photos',
    component: Photos,
    props: (route) => ({ query: route.query.ids }),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
