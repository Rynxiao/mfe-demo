import React from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from './components/ui/button'
import PostsApp from './entries/PostsApp'
import AlbumsApp from './entries/AlbumsApp'

const App = () => {
  return (
    <div>
      <h1>Container App</h1>
      <Button>Container: Click Me</Button>
      <PostsApp />
      <AlbumsApp />
    </div>
  )
}

const root = createRoot(document.getElementById('containerRoot'))
root.render(<App />)
