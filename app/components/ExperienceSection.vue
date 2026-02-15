<script setup lang="ts">
import { experience } from '~/data'
</script>

<template>
  <section id="experience" class="mb-16 md:mb-32">
      <h3 class="text-3xl md:text-5xl font-black mb-8 md:mb-12 cartoon-title flex items-center gap-3 md:gap-4">
        <div class="w-12 h-12 bg-pop-purple rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
          <UIcon name="i-heroicons-bolt-solid" class="w-6 h-6" />
        </div>
        QUEST LOG
    </h3>
    <div class="space-y-8">
        <ExperienceCard 
          v-for="(exp, index) in experience"
          :key="index"
          v-bind="exp"
        />
    </div>
  </section>
</template>
