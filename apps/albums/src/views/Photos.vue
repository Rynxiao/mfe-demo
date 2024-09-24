<template>
  <div class="w-full h-full flex flex-col">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <BreadcrumbLink>
              <RouterLink to="/albums">All Albums</RouterLink>
            </BreadcrumbLink>
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbLink>{{ albumId }}</BreadcrumbLink>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem v-for="id in albumIds" :key="id">
                <BreadcrumbLink class="inline-block w-full" as-child>
                  <Button class="p-0" variant="link" @click="onSelectAlbums(id)">{{ id }}</Button>
                </BreadcrumbLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Photos</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <Separator class="my-4" />
    <div class="w-full flex-1 overflow-y-auto">
      <ScrollArea class="w-full flex-1 rounded-md mt-8">
        <div class="grid lg:grid-cols-5 lg:gap-8 lg:px-8 md:grid-cols-3 md:gap-4 md:px-4">
          <AlbumArtwork
            v-for="photo in photos"
            :key="photo.title"
            :album="photo"
            class="w-[150px]"
            aspectRatio="square"
            :width="150"
            :height="150"
          />
        </div>
      </ScrollArea>
    </div>
  </div>
</template>

<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import AlbumArtwork from '@/components/AlbumArtwork.vue'
import { onMounted, ref } from 'vue'
import { faker } from '@faker-js/faker'
import { map } from 'lodash'
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()

const albumId = ref('')
const albumIds = ref([])
const photos = ref([])
const loading = ref(true)

const onFetchPhotos = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId.value}/photos`,
    )
    if (response.ok) {
      const photosData = await response.json()
      photos.value = map(photosData, (photo) => ({
        ...photo,
        description: faker.lorem.lines(1),
        image: photo.thumbnailUrl,
      }))
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  albumId.value = route.params.id
  albumIds.value = route.query.ids.split(',')
  await onFetchPhotos()
})

const onSelectAlbums = async (id) => {
  albumId.value = id
  await onFetchPhotos()
}
</script>
