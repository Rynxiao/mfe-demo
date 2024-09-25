const channel = new BroadcastChannel('shared_state_channel')

export const syncUserToSubApps = (user) => {
  channel.postMessage({ type: 'user:sync', payload: user })
}
