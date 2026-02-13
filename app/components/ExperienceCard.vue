<template>
  <div class="cartoon-box p-6 relative group hover:bg-pop-cyan/5">
    <div class="absolute -top-3 -right-3 bg-pop-yellow border-2 border-black px-3 py-1 font-black text-sm transform rotate-3 shadow-[2px_2px_0px_0px_#000]">
      {{ period }}
    </div>
    
    <div class="mb-4">
      <h3 class="text-xl font-black cartoon-title mb-1">{{ role }}</h3>
      <div class="text-pop-purple font-bold font-mono text-sm">@ {{ company }}</div>
    </div>

    <p class="text-gray-700 text-sm mb-4 leading-relaxed font-medium">
      {{ description }}
    </p>

    <div v-if="achievements && achievements.length" class="mb-4 bg-white/50 p-3 rounded-lg border-2 border-black/10">
      <div class="text-xs font-black uppercase tracking-wider mb-2 text-gray-500">Key Quests Completed:</div>
      <ul class="space-y-1.5 list-none">
        <li v-for="(achievement, idx) in achievements" :key="idx" class="text-sm flex items-start gap-2">
          <span class="text-pop-green text-xs mt-1">⚡</span>
          <span>{{ achievement }}</span>
        </li>
      </ul>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <span v-for="tag in tags" :key="tag" class="text-xs font-bold px-2 py-0.5 border border-black rounded bg-white">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  role: string
  company: string
  period: string
  description: string
  achievements?: string[]
  tags: string[]
}>()
</script>
