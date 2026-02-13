<template>
  <a :href="link" target="_blank" class="block group">
    <div class="cartoon-box p-5 h-full hover:bg-pop-purple/5 transition-colors">
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
      
      <div class="mt-auto flex items-center gap-2 text-xs font-bold group-hover:underline decoration-2 underline-offset-2">
        READ PAPER ↗
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  venue: string
  type: string
  date: string
  link?: string
}>()
</script>
