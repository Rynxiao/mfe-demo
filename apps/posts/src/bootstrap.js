import React from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from '@/components/ui/button'
import './main.css'

const App = () => {
  return (
    <div>
      <h1>Posts App</h1>
      <Button>Posts: Click Me</Button>
    </div>
  )
}

export const mount = (el) => {
  const root = createRoot(el)
  root.render(<App />)
}

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('postsRoot')
  if (root) {
    mount(root)
  }
}
