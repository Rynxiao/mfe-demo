export const channel = new BroadcastChannel('shared_state_channel')

export const listenForUserSync = (userStore) => {
  channel.onmessage = (event) => {
    if (event.data.type === 'user:sync') {
      userStore.syncUser(event.data.payload)
    }
  }
}
