import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Photos from '@/views/Photos'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { name: 'home', path: '/albums', component: Home },
  {
    name: 'photos',
    path: '/albums/:id/photos',
    component: Photos,
    props: (route) => ({ query: route.query.ids }),
  },
  { name: 'not-found', path: '/:catchAll(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
