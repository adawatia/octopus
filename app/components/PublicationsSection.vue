<script setup lang="ts">
import { publications, certifications } from '~/data'
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-32">
    <section class="lg:col-span-2">
        <h3 class="text-2xl md:text-3xl font-black cartoon-title mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
        <div class="w-12 h-12 bg-pop-cyan rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
          <UIcon name="i-heroicons-document-text-solid" class="w-6 h-6" />
        </div>
        PUBLICATIONS
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PublicationCard 
          v-for="(pub, index) in publications"
          :key="index"
          v-bind="pub"
        />
      </div>
    </section>

    <section>
        <h3 class="text-2xl md:text-3xl font-black cartoon-title mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
        <div class="w-12 h-12 bg-pop-yellow rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
          <UIcon name="i-heroicons-trophy-solid" class="w-6 h-6" />
        </div>
        CERTIFICATIONS
      </h3>
      <div class="cartoon-box p-6 bg-pop-yellow/10">
        <ul class="space-y-4">
            <li v-for="cert in certifications" :key="cert.name" class="flex items-center gap-3 font-bold text-sm">
              <UTooltip ignore-non-keyboard-focus :text="cert.tooltip">
                  <div class="flex items-center gap-3 cursor-default">
                    <UIcon name="i-heroicons-check-badge-solid" class="w-5 h-5 text-pop-purple" /> {{ cert.name }}
                  </div>
              </UTooltip>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
