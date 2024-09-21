import React, { useEffect, useState } from 'react'
import { Card, CardDescription } from '@/components/ui/card'
import { MessageSquareMore } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import CommentItem from '@/components/CommentItem'
import { map, noop } from 'lodash'
import { Image } from '@chakra-ui/image'

const PostItem = ({ id, title, body, userId }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [comments, setComments] = useState()

  useEffect(() => {
    const initializeCommentsOfPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      if (response.ok) {
        const data = await response.json()
        setComments(data)
      }
    }

    initializeCommentsOfPost().catch(noop)
  }, [])

  return (
    <Card className="sm:col-span-2 mb-4">
      <div className="flex gap-4 p-3">
        <Image
          src={`https://picsum.photos/200?random=${id}`}
          fallbackSrc="https://placehold.co/200"
          alt="Post Image"
          className="w-20 h-20 aspect-square rounded-md object-cover"
        />
        <div className="flex-1">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
            <h3 className="text-xl font-semibold leading-none tracking-tight">{title}</h3>
            <CardDescription className="mt-2 text-sm text-muted-foreground">{body}</CardDescription>
            <div className="flex h-5 items-center space-x-4 text-sm mt-2">
              <p className="text-sm text-muted-foreground">User {userId}</p>
              <Separator orientation="vertical" />
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <MessageSquareMore className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              {map(comments, (comment, index) => {
                const commentsLength = comments.length
                const isLast = index === commentsLength - 1
                return <CommentItem key={comment.id} isLast={isLast} {...comment} />
              })}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </Card>
  )
}

export default PostItem
