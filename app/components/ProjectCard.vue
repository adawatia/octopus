<template>
  <component
    :is="link && link !== '#' ? 'a' : 'div'"
    :href="link && link !== '#' ? link : undefined"
    :target="link && link !== '#' ? '_blank' : undefined"
    class="cartoon-box p-6 h-full flex flex-col justify-between group hover:bg-pop-pink/10 transition-colors duration-300 relative overflow-hidden"
    :class="{ 'cursor-pointer': link && link !== '#' }"
  >
    <div class="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white border-2 border-black flex items-end justify-start p-4 rotate-12 group-hover:scale-110 transition-transform">
      <UIcon name="i-heroicons-code-bracket-solid" class="text-2xl w-8 h-8 text-pop-cyan" />
    </div>
    
    <div>
      <h4 class="text-2xl font-black mb-3 cartoon-title leading-tight">{{ title }}</h4>
      <p class="text-gray-700 font-medium leading-relaxed">{{ description }}</p>
    </div>
    
    <div class="flex gap-2 flex-wrap mt-6">
      <span 
        v-for="(tag, index) in tags" 
        :key="tag" 
        class="text-xs font-bold px-3 py-1 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]"
        :class="tagColors[index % tagColors.length]"
      >
        {{ tag }}
      </span>
    </div>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tags: string[]
  link?: string
}>()

const tagColors = [
    'bg-pop-yellow',
    'bg-pop-cyan', 
    'bg-pop-pink',
    'bg-pop-purple',
    'bg-pop-orange'
]
</script>
