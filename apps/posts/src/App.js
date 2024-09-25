import { ScrollArea } from '@/components/ui/scroll-area'
import PostItem from '@/components/PostItem'
import React, { useEffect, useState } from 'react'
import { map, noop } from 'lodash'
import useUser from '@/store/useUser'
import PostSkeleton from '@/components/PostSkeleton'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      const initializePosts = async () => {
        setLoading(true)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        if (response.ok) {
          const data = await response.json()
          setPosts(data)
          setLoading(false)
        }
      }

      initializePosts().catch(noop)
    }
  }, [user])

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-2xl font-bold tracking-tight">All Posts</h1>
      <ScrollArea className="w-full flex-1 rounded-md mt-8">
        {loading ? (
          <PostSkeleton />
        ) : (
          map(posts, (post) => <PostItem key={post.id} user={user} {...post} />)
        )}
      </ScrollArea>
    </div>
  )
}

export default App
