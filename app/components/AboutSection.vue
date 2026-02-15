<script setup lang="ts">
import { techStack, education } from '~/data'
</script>

<template>
  <section id="about" class="mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
    <div class="cartoon-box p-6 md:p-8 bg-white rotate-1">
      <h3 class="text-2xl md:text-3xl font-black cartoon-title mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
        <div class="w-12 h-12 bg-pop-purple rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
          <UIcon name="i-heroicons-user-circle-solid" class="w-6 h-6" />
        </div>
        ABOUT ME
      </h3>
      <p class="text-lg leading-loose font-medium text-gray-800 mb-6">
        I am a <span class="font-bold text-pop-purple">Backend Developer</span> specializing in scalable API architecture and cloud infrastructure. Check out my work on 
        <UTooltip ignore-non-keyboard-focus text="Check my code">
          <a href="https://github.com/adawatia" class="underline decoration-pop-cyan decoration-4" target="_blank" rel="noopener noreferrer">GitHub</a>
        </UTooltip>
          or connect with me on 
        <UTooltip ignore-non-keyboard-focus text="Let's connect!">
          <a href="https://linkedin.com/in/adawatia" class="underline decoration-pop-pink decoration-4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </UTooltip>.
      </p>
      <p class="text-lg leading-loose font-medium text-gray-800 mb-6">
        Proficient in Python (FastAPI, Django) and orchestrating containerized workloads on AWS and GCP. Experienced in engineering robust server-side solutions and integrating production-grade AI pipelines.
      </p>
      <div class="flex flex-wrap gap-2 mt-4">
          <UTooltip ignore-non-keyboard-focus text="Black Belt in coding?">
            <span class="px-3 py-1 bg-gray-100 border border-black rounded font-bold text-sm cursor-default flex items-center gap-1">
              <UIcon name="i-fluent-emoji-martial-arts-uniform" class="w-4 h-4" /> Karate
            </span>
          </UTooltip>
          <UTooltip ignore-non-keyboard-focus text="Knowledge sponge">
            <span class="px-3 py-1 bg-gray-100 border border-black rounded font-bold text-sm cursor-default flex items-center gap-1">
              <UIcon name="i-fluent-emoji-open-book" class="w-4 h-4" /> Reading
            </span>
          </UTooltip>
          <UTooltip ignore-non-keyboard-focus text="I use Linux Mint btw">
            <span class="px-3 py-1 bg-gray-100 border border-black rounded font-bold text-sm cursor-default flex items-center gap-1">
              <UIcon name="i-logos-linux-tux" class="w-4 h-4" /> Linux
            </span>
          </UTooltip>
      </div>
    </div>

    <div>
      <!-- Tech Stack -->
      <div class="mb-8 md:mb-12">
        <h3 class="text-2xl md:text-3xl font-black cartoon-title mb-4 md:mb-6 transform -rotate-1 flex items-center gap-3 md:gap-4">
          <div class="w-12 h-12 bg-pop-orange rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
            <UIcon name="i-heroicons-wrench-screwdriver-solid" class="w-6 h-6" />
          </div>
          INVENTORY
        </h3>
        <div class="flex flex-wrap gap-3">
          <TechPill 
            v-for="tech in techStack" 
            :key="tech.name"
            :name="tech.name" 
            :icon="tech.icon" 
            :class="tech.class" 
          />
        </div>
      </div>
      
      <!-- Education -->
        <div class="cartoon-box p-6 bg-pop-cyan/10 border-dashed">
          <h3 class="text-2xl font-black cartoon-title mb-4 flex items-center gap-4">
            <div class="w-10 h-10 bg-pop-cyan rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
              <UIcon name="i-heroicons-academic-cap-solid" class="w-5 h-5" />
            </div>
            EDUCATION
          </h3>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between items-start gap-2">
                <h4 class="font-bold text-lg">{{ education.degree }}</h4>
                <span class="text-sm font-bold bg-white border border-black px-2 rounded whitespace-nowrap shrink-0">{{ education.period }}</span>
              </div>
              <div class="text-gray-600 font-medium">{{ education.institution }}</div>
              <div class="text-sm font-bold text-pop-purple mt-1">{{ education.gpa }}</div>
            </div>
            <div class="border-t border-black/10 pt-4">
                <h4 class="font-bold text-sm mb-2 text-gray-500 uppercase tracking-wider">Relevant Loot (Coursework)</h4>
                <div class="flex flex-wrap gap-2">
                  <UTooltip v-for="course in education.coursework" :key="course.name" ignore-non-keyboard-focus :text="course.tooltip">
                    <span :class="['text-xs bg-white px-2 py-1 rounded border border-black/20 cursor-default transition-colors', course.class]">{{ course.name }}</span>
                  </UTooltip>
                </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>
