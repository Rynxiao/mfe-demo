import React, { useEffect, useRef } from 'react'
import { mount } from 'albumsApp/AlbumsIndex'

const AlbumsApp = () => {
  const albumsRef = useRef(null)

  useEffect(() => {
    if (albumsRef.current) {
      mount(albumsRef.current)
    }
  }, [])

  return <div ref={albumsRef} />
}

export default AlbumsApp
