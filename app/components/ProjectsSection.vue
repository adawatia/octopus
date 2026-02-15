<script setup lang="ts">
import { projects } from '~/data'
</script>

<template>
  <section id="work" class="mb-16 md:mb-32">
    <h3 class="text-3xl md:text-5xl font-black mb-8 md:mb-12 cartoon-title flex items-center gap-3 md:gap-4">
        <div class="w-12 h-12 bg-pop-cyan rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
          <UIcon name="i-heroicons-rocket-launch-solid" class="w-6 h-6" />
        </div>
        SIDE MISSIONS
    </h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
            v-for="(project, index) in projects"
            :key="index"
            v-bind="project"
        />
    </div>
  </section>
</template>
