import './main.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import PostsApp from './entries/PostsApp'
import AlbumsApp from './entries/AlbumsApp'
import NavBar from '@/components/NavBar'

const App = () => (
  <div className="flex min-h-screen w-full flex-col">
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <NavBar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {/*<PostsApp />*/}
          <AlbumsApp />
        </main>
      </div>
    </div>
  </div>
)

const root = createRoot(document.getElementById('containerRoot'))
root.render(<App />)
