import './main.css'
import 'vue-progressive-image/dist/style.css'

import { createApp } from 'vue'
import App from './App'
import createRouterWithHistory from './router'
import { createMemoryHistory, createWebHistory } from 'vue-router'

export const mount = (el, { onSubAppRouteChange, defaultHistory }) => {
  const app = createApp(App)
  const history = defaultHistory || createMemoryHistory()
  const router = createRouterWithHistory(history)
  app.use(router)
  app.mount(el)

  if (onSubAppRouteChange) {
    router.beforeEach((to, from, next) => {
      onSubAppRouteChange(to.fullPath)
      next()
    })
  }

  return {
    onContainerRouteChange: (pathname) => {
      const { location } = history
      if (location !== pathname) {
        router.push(pathname)
      }
    },
  }
}

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('albumsRoot')
  if (root) {
    mount(root, { defaultHistory: createWebHistory() })
  }
}
