import React from 'react'
import { Album, Book, Package2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span>MFE Webpack Federation</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavLink
              to="/posts"
              className={({ isActive }) => {
                return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive ? 'text-primary' : ''}`
              }}
            >
              <Book className="h-4 w-4" /> Posts
            </NavLink>
            <NavLink
              to="/albums"
              className={({ isActive }) => {
                return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive ? 'text-primary' : ''}`
              }}
            >
              <Album className="h-4 w-4" /> Albums
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar
