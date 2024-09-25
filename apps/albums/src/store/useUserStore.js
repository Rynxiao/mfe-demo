import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({ currentUser: null }),
  actions: {
    syncUser(user) {
      this.currentUser = user
    },
  },
})

export default useUserStore
