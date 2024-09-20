import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

export const mount = (el) => {
  createApp(App).mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('albumsRoot')
  if (root) {
    mount(root)
  }
}
