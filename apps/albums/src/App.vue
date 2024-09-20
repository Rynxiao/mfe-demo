<template>
  <div class="w-full h-full flex flex-col">
    <h1 class="text-2xl font-bold tracking-tight">All Albums</h1>
    <ScrollArea class="w-full flex-1 rounded-md mt-8">
      <ListItem />
      <ListItem />
    </ScrollArea>
  </div>
</template>

<script>
import { ScrollArea } from '@/components/ui/scroll-area'
import ListItem from '@/components/ListItem'

export default {
  name: 'App',
  components: { ScrollArea, ListItem },
}
</script>
