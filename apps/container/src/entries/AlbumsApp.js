import React, { useEffect, useRef } from 'react'
import { mount } from 'albumsApp/AlbumsIndex'
import { createPath, useLocation } from 'react-router-dom'
import { useHistory } from '@/components/BrowserRouter'
import useUserStore from '@/store/userStore'
import { syncUserToSubApps } from '@/store/eventBus'

const AlbumsApp = () => {
  const albumsRef = useRef(null)
  const location = useLocation()
  const history = useHistory()
  const currentUser = useUserStore((state) => state.currentUser)

  useEffect(() => {
    if (albumsRef.current) {
      const { onContainerRouteChange } = mount(albumsRef.current, {
        onSubAppRouteChange: (path) => {
          history.push(path)
        },
      })
      if (onContainerRouteChange) {
        onContainerRouteChange(createPath(location))
      }
    }
  }, [])

  useEffect(() => {
    syncUserToSubApps(currentUser)
  }, [currentUser])

  return <div className="w-full h-full" ref={albumsRef} />
}

export default AlbumsApp
