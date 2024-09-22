import './main.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '@/router'

export const mount = (el) => {
  const root = createRoot(el)
  root.render(<AppRouter />)
}

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('postsRoot')
  if (root) {
    mount(root)
  }
}
