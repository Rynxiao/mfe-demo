import { mount } from 'postsApp/PostsIndex'
import React, { useEffect, useRef } from 'react'
import useUserStore from '@/store/userStore'
import { syncUserToSubApps } from '@/store/eventBus'

const PostsApp = () => {
  const postsRef = useRef(null)
  const currentUser = useUserStore((state) => state.currentUser)

  useEffect(() => {
    if (postsRef.current) {
      mount(postsRef.current)
    }
  }, [])

  useEffect(() => {
    syncUserToSubApps(currentUser)
  }, [currentUser])

  return <div className="w-full h-full" ref={postsRef} />
}

export default PostsApp
