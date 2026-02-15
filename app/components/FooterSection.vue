<script setup lang="ts">
const config = useRuntimeConfig()
const resumeLink = `${config.app.baseURL}resume.pdf`
</script>

<template>
  <footer id="contact" class="border-t-[3px] border-black pt-12 md:pt-16 pb-24 md:pb-24 text-center bg-pop-pink/10 -mx-4 md:-mx-6 px-4 md:px-6 mt-12 md:mt-20">
      <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-5xl font-black cartoon-title mb-6 md:mb-8">WANNA COLLAB?</h2>
          <p class="mb-6 md:mb-10 text-lg md:text-xl font-medium px-4">Have a cool idea? Let's make it happen!</p>
          <a href="mailto:dv.adawatia@gmail.com" class="inline-block text-lg md:text-3xl font-black bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] px-4 md:px-8 py-3 md:py-4 hover:bg-pop-yellow hover:scale-105 transition-all transform md:rotate-2 hover:rotate-0 rounded-2xl break-all">
              dv.adawatia@gmail.com
          </a>
          <div class="mt-6 md:mt-8 text-base md:text-xl font-bold flex flex-col gap-2">
              <span>+91-8437330408</span>
          </div>
          
          <div class="mt-12 md:mt-16 flex flex-col items-center gap-6 opacity-70 font-mono text-xs md:text-sm">
              <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                  <span>© 2026 Adawatia</span>
                  <span>Built with Nuxt 4 & Fun</span>
              </div>
              <div class="flex flex-row justify-center gap-8 grayscale hover:grayscale-0 transition-all duration-300">
                  <UTooltip ignore-non-keyboard-focus text="Chat on WhatsApp">
                      <a href="https://wa.me/918437330408" target="_blank" rel="noopener noreferrer" class="block hover:scale-125 transition-transform">
                          <UIcon name="i-logos-whatsapp-icon" class="w-6 h-6" />
                      </a>
                  </UTooltip>
                  <UTooltip ignore-non-keyboard-focus text="Connect on LinkedIn">
                      <a href="https://linkedin.com/in/adawatia" target="_blank" rel="noopener noreferrer" class="block hover:scale-125 transition-transform">
                          <UIcon name="i-logos-linkedin-icon" class="w-6 h-6" />
                      </a>
                  </UTooltip>
                   <UTooltip ignore-non-keyboard-focus text="View Source Code">
                      <a href="https://github.com/adawatia/octopus" target="_blank" rel="noopener noreferrer" class="block hover:scale-125 transition-transform">
                          <UIcon name="i-heroicons-code-bracket-square-solid" class="w-6 h-6 text-pop-purple" />
                      </a>
                  </UTooltip>
                   <UTooltip ignore-non-keyboard-focus text="Download Resume">
                      <a :href="resumeLink" download="Devansh-Sharma-Resume.pdf" class="block hover:scale-125 transition-transform">
                          <UIcon name="i-heroicons-document-arrow-down-solid" class="w-6 h-6 text-pop-pink" />
                      </a>
                  </UTooltip>
              </div>
          </div>
      </div>
  </footer>
</template>
