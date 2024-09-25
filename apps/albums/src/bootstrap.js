import './main.css'
import 'vue-progressive-image/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App'
import createRouterWithHistory from './router'
import { createMemoryHistory, createWebHistory } from 'vue-router'
import { listenForUserSync } from '@/store/eventBus'
import useUserStore from '@/store/useUserStore'

export const mount = (el, { onSubAppRouteChange, defaultHistory }) => {
  const app = createApp(App)
  const history = defaultHistory || createMemoryHistory()
  const router = createRouterWithHistory(history)
  const pinia = createPinia()
  app.use(router)
  app.use(pinia)
  app.mount(el)

  const userStore = useUserStore(pinia)
  listenForUserSync(userStore)

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
    const channel = new BroadcastChannel('shared_state_channel')
    channel.postMessage({ type: 'user:sync', payload: { name: 'Local User', id: 1 } })
  }
}
