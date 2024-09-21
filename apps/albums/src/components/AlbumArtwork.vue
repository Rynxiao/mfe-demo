<template>
  <div
    class="flex flex-col items-center w-full h-full space-y-3 cursor-pointer"
    @click.prevent="$emit('toPhotos')"
  >
    <div :class="cn(`overflow-hidden rounded-md`, props.class)">
      <ProgressiveImage
        :class="
          cn(
            'h-auto w-auto object-cover transition-all hover:scale-105',
            props.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
            `w-[${props.width}px] h-[${props.height}px]`,
          )
        "
        :src="props.album.image"
        :fallback-src="`https://placehold.co/${props.width}x${props.height}`"
      />
    </div>
    <div class="space-y-1 text-sm text-center">
      <h3 class="font-medium leading-none">{{ props.album.title }}</h3>
      <p class="text-xs text-muted-foreground">{{ props.album.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils'
import { defineProps } from 'vue'
import { ProgressiveImage } from 'vue-progressive-image'

const props = defineProps({
  aspectRatio: { type: String, default: 'portrait', required: false },
  width: { type: Number, required: false },
  height: { type: Number, required: false },
  class: { type: String, required: false },
  album: {
    type: {
      id: Number,
      title: String,
      description: String,
      image: String,
    },
    required: true,
  },
})
</script>
