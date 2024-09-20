import React from 'react'
import { Card, CardDescription } from '@/components/ui/card'
import { MessageSquareMore } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const ListItem = ({ title, description, username }) => (
  <Card className="sm:col-span-2 mb-4">
    <div className="flex gap-4 p-3">
      <img
        src="https://picsum.photos/200"
        alt="Post"
        className="w-20 h-20 aspect-square rounded-md object-cover"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold leading-none tracking-tight">
          sunt aut facere repellat provident occaecati excepturi optio reprehenderit
        </h3>
        <CardDescription className="mt-2 text-sm text-muted-foreground">
          quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae
          ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
        </CardDescription>
        <div className="flex h-5 items-center space-x-4 text-sm mt-2">
          <p className="text-sm text-muted-foreground">User 1</p>
          <Separator orientation="vertical" />
          <MessageSquareMore className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  </Card>
)

export default ListItem
