<template>
  <component 
    :is="isValidLink ? 'a' : 'div'" 
    :href="isValidLink ? link : undefined" 
    :target="isValidLink ? '_blank' : undefined"
    :rel="isValidLink ? 'noopener noreferrer' : undefined"
    class="block group h-full relative"
    :class="{ 'cursor-pointer': isValidLink }"
  >
    <div class="cartoon-box p-5 h-full hover:bg-pop-purple/5 transition-colors flex flex-col relative overflow-hidden">
      <!-- Status Badge -->
      <div class="absolute top-4 right-4 z-10">
          <span class="px-2 py-1 text-xs font-black uppercase tracking-wider rounded border-2 border-black shadow-hover"
              :class="statusColor">
              {{ status }}
          </span>
      </div>

      <div class="flex flex-col h-full mt-2">
        <!-- Type -->
        <div class="mb-2">
            <span class="bg-black text-white px-2 py-0.5 text-xs font-black uppercase tracking-wider rounded">{{ type }}</span>
        </div>

        <!-- Title -->
        <h3 class="text-lg font-black cartoon-title mb-1 group-hover:text-pop-purple transition-colors leading-tight pr-16">
            {{ title }}
        </h3>

        <!-- Author -->
        <div v-if="author" class="text-sm font-bold text-gray-600 mb-3 font-mono">
            by {{ author }}
        </div>

        <!-- Summary -->
        <p v-if="summary" class="text-sm text-gray-700 font-medium mb-4 line-clamp-3 leading-relaxed">
            {{ summary }}
        </p>

        <!-- Rating -->
        <div class="mt-auto pt-4 flex items-center justify-between border-t-2 border-gray-100">
            <div class="flex gap-0.5" title="Rating">
                <UIcon v-for="i in 5" :key="i" 
                    :name="i <= rating ? 'i-heroicons-star-solid' : 'i-heroicons-star'" 
                    class="w-5 h-5"
                    :class="i <= rating ? 'text-pop-yellow stroke-black stroke-1' : 'text-gray-300'"
                />
            </div>
            
             <div v-if="isValidLink" class="text-xs font-black uppercase group-hover:underline decoration-2 underline-offset-2 flex items-center gap-1">
                 View <UIcon name="i-heroicons-arrow-top-right-on-square-20-solid" class="w-3 h-3" />
             </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  author?: string
  type: string
  status: string
  rating: number
  link?: string
  summary?: string
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

const statusColor = computed(() => {
    const s = props.status.toLowerCase()
    if (s === 'reading') return 'bg-pop-yellow text-black'
    if (s === 'read') return 'bg-pop-cyan text-white'
    if (s === 'dropped') return 'bg-pop-orange text-white'
    if (s === 'on hold') return 'bg-gray-200 text-gray-800'
    return 'bg-white text-black'
})
</script>
