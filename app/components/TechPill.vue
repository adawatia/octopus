<template>
  <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 cursor-default select-none">
    <img 
      v-if="isValidUrl(icon)" 
      :src="icon" 
      :alt="`${name} logo`" 
      class="w-5 h-5 object-contain" 
      @error="handleImageError"
      loading="lazy"
    />
    <UIcon v-else :name="imageError ? 'i-heroicons-cube' : icon" class="w-5 h-5" dynamic />
    <span class="font-bold text-sm">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  name: string
  icon: string
}>()

const imageError = ref(false)

const isValidUrl = (str: string): boolean => {
  if (!str) return false
  
  // Only allow http(s) URLs or relative paths starting with /
  if (str.startsWith('/')) return true
  
  try {
    const url = new URL(str)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

const handleImageError = () => {
  imageError.value = true
}
</script>
