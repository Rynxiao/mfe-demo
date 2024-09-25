<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full flex items-center justify-between">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight">All Albums</h2>
      </div>
    </div>
    <Separator class="my-4" />
    <div class="w-full flex-1 overflow-y-auto">
      <ScrollArea class="w-full flex-1 rounded-md mt-8">
        <div class="grid lg:grid-cols-5 lg:gap-8 lg:px-8 md:grid-cols-3 md:gap-4 md:px-4">
          <AlbumArtwork
            v-for="album in albums"
            :key="album.title"
            :album="album"
            class="lg:w-[250px] md:w-[220px]"
            aspectRatio="portrait"
            :width="250"
            :height="330"
            @to-photos="gotoPhotos(album.id)"
          />
        </div>
      </ScrollArea>
    </div>
  </div>
</template>

<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import AlbumArtwork from '@/components/AlbumArtwork.vue'
import { ref, computed, watch } from 'vue'
import { faker } from '@faker-js/faker'
import { join, map } from 'lodash'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/useUserStore'

const userStore = useUserStore()
const currentUser = computed(() => userStore.currentUser)

const albums = ref([])
const albumsIds = computed(() => map(albums.value, 'id'))
const loading = ref(true)
const router = useRouter()

watch(currentUser, async (user) => {
  if (!user) {
    return
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
    if (response.ok) {
      const albumsData = await response.json()
      albums.value = map(albumsData, (album) => ({
        ...album,
        description: faker.lorem.lines(1),
        image: `https://picsum.photos/250/330?random=${album.id}`,
      }))
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})

const gotoPhotos = (id) => {
  router.push({ name: 'photos', params: { id }, query: { ids: join(albumsIds.value, ',') } })
}
</script>
