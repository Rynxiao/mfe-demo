import './main.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'

export const mount = (el) => {
  const root = createRoot(el)
  root.render(<App />)
}

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('postsRoot')
  if (root) {
    mount(root)

    const channel = new BroadcastChannel('shared_state_channel')
    channel.postMessage({ type: 'user:sync', payload: { name: 'Local User', id: 1 } })
  }
}
