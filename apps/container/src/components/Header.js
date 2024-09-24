import React, { useEffect, useState } from 'react'

import { CircleUser } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { get, noop } from 'lodash'

const Header = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({ name: '' })

  useEffect(() => {
    const getUser = async () => {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await usersResponse.json()
      setUsers(users)
      setCurrentUser(get(users, '0'))
    }

    getUser().catch(noop)
  }, [])

  const handleSelectUser = (user) => {
    setCurrentUser(user)
  }

  return (
    <header className="flex h-14 items-center justify-end gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <span>{currentUser.name}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Accounts</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {users.map((user) => (
            <DropdownMenuItem key={user.id} onClick={() => handleSelectUser(user)}>
              {user.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export default Header
