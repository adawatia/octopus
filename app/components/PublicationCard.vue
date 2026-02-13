<template>
  <component 
    :is="isValidLink ? 'a' : 'div'" 
    :href="isValidLink ? link : undefined" 
    :target="isValidLink ? '_blank' : undefined"
    :rel="isValidLink ? 'noopener noreferrer' : undefined"
    class="block group h-full"
    :class="{ 'cursor-pointer': isValidLink }"
  >
    <div class="cartoon-box p-5 h-full hover:bg-pop-purple/5 transition-colors flex flex-col">
      <div class="flex items-start justify-between gap-4 mb-3">
        <span class="bg-black text-white px-2 py-0.5 text-xs font-black uppercase tracking-wider rounded">{{ type }}</span>
        <span class="font-mono text-xs font-bold text-gray-500">{{ date }}</span>
      </div>
      
      <h3 class="text-lg font-black cartoon-title mb-2 group-hover:text-pop-purple transition-colors leading-tight">
        {{ title }}
      </h3>
      
      <div class="text-sm font-bold text-gray-600 mb-4">
        {{ venue }}
      </div>
      
      <div v-if="isValidLink" class="mt-auto flex items-center gap-2 text-xs font-black group-hover:underline decoration-2 underline-offset-2 uppercase w-fit">
        <UTooltip text="Open Research Paper">
           <span class="flex items-center gap-1">
             Read Paper <UIcon name="i-heroicons-arrow-top-right-on-square-20-solid" class="w-3 h-3 ml-0.5 text-pop-purple" />
           </span>
        </UTooltip>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  venue: string
  type: string
  date: string
  link?: string
}>()

const isValidLink = computed(() => {
  if (!props.link || props.link === '#') return false
  
  try {
    const url = new URL(props.link, window.location.origin)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
})
</script>
