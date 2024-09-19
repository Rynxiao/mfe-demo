import React from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/Button'
import PostsApp from './entries/PostsApp'
import AlbumsApp from './entries/AlbumsApp'

const App = () => {
  return (
    <div>
      <h1>Container App</h1>
      <Button />
      <PostsApp />
      <AlbumsApp />
    </div>
  )
}

const root = createRoot(document.getElementById('containerRoot'))
root.render(<App />)
