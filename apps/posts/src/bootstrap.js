import React from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <h1>Posts App</h1>
      <Button />
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
