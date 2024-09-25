import { channel } from '@/store/eventBus'
import { useEffect, useState } from 'react'

const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    channel.onmessage = (event) => {
      if (event.data.type === 'user:sync') {
        setUser(event.data.payload)
      }
    }
  }, [])

  return { user }
}

export default useUser
