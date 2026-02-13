<template>
  <component
    :is="link && link !== '#' ? 'a' : 'div'"
    :href="link && link !== '#' ? link : undefined"
    :target="link && link !== '#' ? '_blank' : undefined"
    class="cartoon-box p-6 h-full flex flex-col justify-between group hover:bg-pop-pink/10 transition-colors duration-300 relative overflow-hidden"
    :class="{ 'cursor-pointer': link && link !== '#' }"
  >
    <div v-if="wip" class="absolute top-0 left-0 bg-pop-yellow border-b-2 border-r-2 border-black px-3 py-1 z-10 shadow-[2px_2px_0px_0px_#000]">
      <span class="font-black text-xs uppercase tracking-wider flex items-center gap-1">
        <UIcon name="i-heroicons-wrench-screwdriver-solid" class="w-3 h-3" />
        Working On
      </span>
    </div>

    <UTooltip text="View Source" :popper="{ placement: 'left' }">
      <div class="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white border-2 border-black flex items-end justify-start p-4 rotate-12 group-hover:scale-110 transition-transform">
        <UIcon name="i-heroicons-code-bracket-solid" class="text-2xl w-8 h-8 text-pop-cyan" />
      </div>
    </UTooltip>

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
  wip?: boolean
}>()

const tagColors = [
    'bg-pop-yellow',
    'bg-pop-cyan', 
    'bg-pop-pink',
    'bg-pop-purple',
    'bg-pop-orange'
]
</script>
