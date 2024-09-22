import { mount } from 'postsApp/PostsIndex'
import React, { useEffect, useRef } from 'react'

const PostsApp = () => {
  const postsRef = useRef(null)

  useEffect(() => {
    if (postsRef.current) {
      mount(postsRef.current)
    }
  }, [])

  return <div className="w-full h-full" ref={postsRef} />
}

export default PostsApp
