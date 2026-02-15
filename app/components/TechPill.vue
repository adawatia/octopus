<template>
  <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-black shadow-hover hover:-translate-y-1 hover:shadow-hard transition-all duration-200 cursor-default select-none">
    <!-- External Image (Standard img tag to avoid IPX issues on static hosting) -->
    <img 
      v-if="isExternalUrl(icon) && !imageError" 
      :src="icon" 
      :alt="`${name} logo`" 
      class="w-5 h-5 object-contain" 
      loading="lazy"
      @error="handleImageError"
    />
    
    <!-- Local Image (NuxtImg for optimization) -->
    <NuxtImg 
      v-else-if="isLocalPath(icon) && !imageError" 
      :src="icon" 
      :alt="`${name} logo`" 
      class="w-5 h-5 object-contain" 
      format="webp,avif"
      sizes="20px"
      placeholder
      loading="lazy"
      @error="handleImageError"
    />

    <!-- Fallback Icon -->
    <UIcon 
      v-else 
      :name="getIconName()" 
      class="w-5 h-5" 
      dynamic 
    />
    
    <span class="font-bold text-sm">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  name: string
  icon: string
}>()

const imageError = ref(false)

const isExternalUrl = (str: string): boolean => {
  if (!str) return false
  try {
    const url = new URL(str)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

const isLocalPath = (str: string): boolean => {
  return typeof str === 'string' && str.startsWith('/')
}

const handleImageError = () => {
  imageError.value = true
}

const getIconName = () => {
  if (imageError.value) return 'i-heroicons-photo'
  
  // If it's not a URL/Path, assume it's an icon class (e.g. i-logos-python)
  if (!isExternalUrl(props.icon) && !isLocalPath(props.icon)) {
    return props.icon
  }
  
  return 'i-heroicons-cube'
}
</script>
