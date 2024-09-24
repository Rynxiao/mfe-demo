import React from 'react'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <NavBar />
        <div className="w-full flex flex-col h-screen">
          <Header />
          <main
            className="w-full flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"
            style={{ height: 'calc(100vh - 60px)' }}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
