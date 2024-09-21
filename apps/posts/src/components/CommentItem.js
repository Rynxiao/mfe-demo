import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Mail, SquareUser } from 'lucide-react'
import { faker } from '@faker-js/faker'
import { upperCase } from 'lodash'

const CommentItem = ({ id, name, email, body, isLast }) => {
  const randomAvatar = faker.image.avatar() || `https://picsum.photos/250/330?random=${id}`
  const randomName = faker.person.fullName() || name
  const randomAvatarFallback = randomName.length >= 2 ? upperCase(randomName.substring(0, 2)) : 'CN'

  return (
    <div className="w-full flex flex-col ml-20">
      <div className="flex items-center gap-4 py-4">
        <Avatar>
          <AvatarImage src={randomAvatar} alt="@shadcn" />
          <AvatarFallback>{randomAvatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex-1 grid gap-1">
          <p className="text-sm font-medium leading-none">{body}</p>
          <div className="flex h-5 items-center space-x-4 text-sm mt-2">
            <div className="flex items-center">
              <SquareUser className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{randomName}</span>
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{email}</span>
            </div>
          </div>
        </div>
      </div>
      {!isLast && <Separator className="ml-10" />}
    </div>
  )
}

export default CommentItem
