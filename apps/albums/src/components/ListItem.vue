<template>
  <Card class="sm:col-span-2 mb-4">
    <div class="flex gap-4 p-3">
      <img
        src="https://picsum.photos/200"
        alt="Post"
        class="w-20 h-20 aspect-square rounded-md object-cover"
      />
      <div class="flex-1">
        <h3 class="text-xl font-semibold leading-none tracking-tight">
          sunt aut facere repellat provident occaecati excepturi optio reprehenderit
        </h3>
        <CardDescription class="mt-2 text-sm text-muted-foreground">
          quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae
          ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
        </CardDescription>
        <div class="flex h-5 items-center space-x-4 text-sm mt-2">
          <p class="text-sm text-muted-foreground">User 1</p>
          <Separator orientation="vertical" />
          <MessageSquareMore class="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import { Card, CardDescription } from '@/components/ui/card'
import { MessageSquareMore } from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'

export default {
  name: 'ListItem',
  components: {
    Card,
    CardDescription,
    MessageSquareMore,
    Separator,
  },
}
</script>
