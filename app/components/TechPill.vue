<template>
  <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 cursor-default select-none">
    <img v-if="isUrl(icon)" :src="icon" :alt="name" class="w-5 h-5 object-contain" />
    <UIcon v-else :name="icon" class="w-5 h-5" dynamic />
    <span class="font-bold text-sm">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  icon: string
}>()

const isUrl = (str: string) => str.startsWith('http') || str.startsWith('/')
</script>
