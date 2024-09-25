import { create } from 'zustand'
import { syncUserToSubApps } from '@/store/eventBus'

const useUserStore = create((set) => {
  return {
    currentUser: { name: '' },
    users: [],
    fetchUser: async () => {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await usersResponse.json()
      const currentUser = users[0]
      set({ users, currentUser })
    },
    chooseUser: (currentUser) => {
      syncUserToSubApps(currentUser)
      set({ currentUser })
    },
  }
})

export default useUserStore
