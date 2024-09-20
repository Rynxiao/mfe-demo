import './main.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { ScrollArea } from '@/components/ui/scroll-area'
import ListItem from '@/components/ListItem'

const App = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-2xl font-bold tracking-tight">All Posts</h1>
      <ScrollArea className="w-full flex-1 rounded-md mt-8">
        <ListItem />
        <ListItem />
      </ScrollArea>
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
