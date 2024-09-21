import './main.css'
import 'vue-progressive-image/dist/style.css'

import { createApp } from 'vue'
import App from './App'
import router from './router'

export const mount = (el) => {
  const app = createApp(App)
  app.use(router)
  app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('albumsRoot')
  if (root) {
    mount(root)
  }
}
