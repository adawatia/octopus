<script setup lang="ts">
const config = useRuntimeConfig()
const resumeLink = `${config.app.baseURL}resume.pdf`

const emit = defineEmits(['celebrate'])

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${sectionId}`)
  }
}
</script>

<template>
  <header class="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center text-center mb-16 md:mb-32 relative px-2 mt-12 md:mt-0">
    <div class="absolute top-10 left-10 w-16 h-16 bg-pop-purple rounded-full border-[3px] border-black shadow-hard animate-bounce delay-75 hidden lg:block opacity-20"></div>
    <div class="absolute bottom-20 right-20 w-12 h-12 bg-pop-orange rotate-12 border-[3px] border-black shadow-hard animate-pulse hidden lg:block opacity-20"></div>

    <div class="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-pop-orange border-[3px] border-black shadow-hard text-white rounded-full mb-6 md:mb-8 font-bold transform md:-rotate-3 hover:rotate-0 transition-transform cursor-default animate-enter text-xs md:text-base">
      <UIcon name="i-heroicons-hand-raised-solid" class="w-4 h-4 md:w-5 md:h-5 text-yellow-300" /> HELLO WORLD! I'M DEVANSH SHARMA
    </div>
    
    <h2 class="text-4xl md:text-8xl font-black mb-4 md:mb-6 leading-tight md:leading-none cartoon-title animate-enter delay-100">
      AI BACKEND<br>
      <span class="marker-highlight text-candy-text relative inline-block transform hover:-rotate-1 transition-transform">ENGINEER</span><br>
      & ARCHITECT
    </h2>
    
    <p class="text-base md:text-2xl max-w-2xl text-gray-700 mb-6 md:mb-10 font-medium animate-enter delay-200 px-4">
      Specializing in scalable API architecture, cloud infrastructure, and production-grade AI pipelines.
    </p>
    
    <div class="flex flex-col md:flex-row gap-3 md:gap-4 animate-enter delay-300 w-full md:w-auto px-4">
      <a 
        @click.prevent="scrollToSection('experience')"
        href="#experience"
        class="inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-pop-yellow text-black font-black text-base md:text-lg px-6 md:px-8 py-3 shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all transform hover:rotate-1 w-full md:w-auto cursor-pointer"
      >
        VIEW MY QUESTS <UIcon name="i-heroicons-arrow-down-circle-solid" class="w-5 h-5 md:w-6 md:h-6 ml-2" />
      </a>
        <UTooltip ignore-non-keyboard-focus text="Check my Repos">
          <UButton 
          size="xl"
          variant="ghost"
          class="rounded-xl border-[3px] border-black bg-white text-black font-bold text-base md:text-lg px-6 md:px-8 py-3 shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all w-full md:w-auto justify-center"
          to="https://github.com/adawatia"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB <UIcon name="i-logos-github-icon" class="w-4 h-4 md:w-5 md:h-5 ml-2" />
        </UButton>
      </UTooltip>
        <UTooltip ignore-non-keyboard-focus text="Download Resume">
          <UButton 
          size="xl"
          variant="ghost"
          class="rounded-xl border-[3px] border-black bg-pop-cyan text-black font-bold text-base md:text-lg px-6 md:px-8 py-3 shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all w-full md:w-auto justify-center"
          :to="resumeLink"
          target="_blank"
          rel="noopener noreferrer"
          download="Devansh-Sharma-Resume.pdf"
          external
        >
          RESUME <UIcon name="i-heroicons-document-arrow-down-solid" class="w-4 h-4 md:w-5 md:h-5 ml-2" />
        </UButton>
      </UTooltip>
    </div>
  </header>
</template>
