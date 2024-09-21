import { ScrollArea } from '@/components/ui/scroll-area'
import PostItem from '@/components/PostItem'
import React, { useEffect, useState } from 'react'
import { map, noop } from 'lodash'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const initializePosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    }

    initializePosts().catch(noop)
  }, [])

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-2xl font-bold tracking-tight">All Posts</h1>
      <ScrollArea className="w-full flex-1 rounded-md mt-8">
        {map(posts, (post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </ScrollArea>
    </div>
  )
}

export default App
