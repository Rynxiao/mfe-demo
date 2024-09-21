import React from 'react'
import { Album, Book, Package2 } from 'lucide-react'

const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
)

const NavBar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">MFE Webpack Federation</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Book className="h-4 w-4" />
              Posts
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Album className="h-4 w-4" />
              Albums
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar
