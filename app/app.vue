<script setup lang="ts">
import confetti from 'canvas-confetti'
import { 
  techStack, 
  education, 
  experience, 
  projects, 
  publications, 
  certifications, 
  seoData 
} from '~/data'

const toast = useToast()
const config = useRuntimeConfig()
const resumeLink = `${config.app.baseURL}resume.pdf`

// Force light mode
const colorMode = useColorMode()
colorMode.preference = 'light'

const confettiInterval = ref<any>(null)
const celebrationSound = ref<HTMLAudioElement | null>(null)

const triggerCelebration = () => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }
  
  // Play joyous sound
  try {
    if (!celebrationSound.value) {
      celebrationSound.value = new Audio(`${config.app.baseURL}celebration.mp3`)
      celebrationSound.value.volume = 0.5 // Not too loud
    }
    celebrationSound.value.currentTime = 0
    celebrationSound.value.play().catch(e => console.log('Audio play failed:', e))
  } catch (e) {
    console.log('Audio setup failed:', e)
  }
  
  const duration = 3 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 }

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

  if (confettiInterval.value) {
    clearInterval(confettiInterval.value)
    confettiInterval.value = null
  }

  confettiInterval.value = setInterval(function() {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      if (confettiInterval.value) {
        clearInterval(confettiInterval.value)
        confettiInterval.value = null
      }
      return
    }

    const particleCount = 50 * (timeLeft / duration)
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
  }, 250)
  
  // Also do a quick burst at the center
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  })
}

const handleNotify = () => {
  try {
    toast.add({
      title: 'Newsletter',
      description: "You're on the list! Stay tuned for updates.",
      icon: 'i-heroicons-check-circle-solid',
      color: 'success'
    })
  } catch (error) {
    console.error('Failed to show notification:', error)
  }
}

// Smooth scroll to section without router interference
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Update URL hash without triggering router
    window.history.replaceState(null, '', `#${sectionId}`)
  }
}

// SEO: Structured Data (JSON-LD) for rich search results
useHead({
  script: seoData
})
</script>

<template>
  <UApp>
    <div class="min-h-screen relative font-sans text-candy-text selection:bg-pop-pink selection:text-white md:cursor-none">
      <CustomCursor class="hidden md:block" />
      <Marquee />
      <!-- Dotted Background -->
      <div class="fixed inset-0 z-[-1] bg-candy-bg">
          <div class="absolute inset-0 bg-dots pointer-events-none"></div>
      </div>
      
      <main class="container mx-auto px-4 md:px-6 py-4 md:py-8 relative z-10 max-w-6xl pb-24 md:pb-8">
        <!-- Desktop Navbar -->
        <nav class="hidden md:flex justify-between items-center mb-20 cartoon-box p-4 bg-white sticky top-4 z-50">
          <h1 
            @click="triggerCelebration" 
            class="text-xl md:text-2xl font-black cartoon-title bg-pop-yellow border-2 border-black shadow-hover px-3 py-1 -rotate-2 cursor-pointer active:scale-95 transition-transform select-none"
          >
              DEV_FOLIO
          </h1>
          <div class="flex gap-6 font-bold text-sm">
            <a @click.prevent="scrollToSection('about')" href="#about" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-cyan transition-all cursor-pointer">ABOUT</a>
            <a @click.prevent="scrollToSection('experience')" href="#experience" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-pink transition-all cursor-pointer">QUESTS</a>
            <a @click.prevent="scrollToSection('work')" href="#work" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-yellow transition-all cursor-pointer">PROJECTS</a>
            <a @click.prevent="scrollToSection('blog')" href="#blog" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-orange transition-all cursor-pointer">BLOG</a>
          </div>
        </nav>

        <!-- Mobile Floating Bottom Navbar -->
        <nav class="md:hidden fixed bottom-4 left-4 right-4 z-50 cartoon-box bg-white p-2.5 flex justify-around items-center gap-1">
          <a @click.prevent="scrollToSection('about')" href="#about" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-cyan transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-user-circle-solid" class="w-5 h-5" />
            <span>ABOUT</span>
          </a>
          <a @click.prevent="scrollToSection('experience')" href="#experience" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-pink transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-bolt-solid" class="w-5 h-5" />
            <span>QUESTS</span>
          </a>
          
          <!-- DEV_FOLIO Logo in Center -->
          <div 
             @click="triggerCelebration"
             class="flex flex-col items-center justify-center px-2 flex-1 cursor-pointer active:scale-95 transition-transform select-none"
          >
            <div class="text-xs font-black cartoon-title bg-pop-yellow border-2 border-black shadow-hover px-2 py-0.5 -rotate-2 whitespace-nowrap">
              DEV_FOLIO
            </div>
          </div>
          
          <a @click.prevent="scrollToSection('work')" href="#work" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-yellow transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-rocket-launch-solid" class="w-5 h-5" />
            <span>PROJECTS</span>
          </a>
          <a @click.prevent="scrollToSection('blog')" href="#blog" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-orange transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-pencil-square-solid" class="w-5 h-5" />
            <span>BLOG</span>
          </a>
        </nav>

        <!-- Hero Section -->
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

        <!-- About Me Sections -->
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

        <!-- Experience Log -->
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

        <!-- Projects -->
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

        <!-- Publications & Certs -->
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

         <!-- Blog -->
         <section id="blog" class="mb-16 md:mb-32">
            <h3 class="text-3xl md:text-4xl font-black cartoon-title mb-6 md:mb-10 flex items-center gap-3 md:gap-4">
               <div class="w-12 h-12 bg-pop-pink rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
                  <UIcon name="i-heroicons-pencil-square-solid" class="w-6 h-6" />
                </div>
              LATEST LOGS
            </h3>
            <div class="cartoon-box p-12 text-center bg-gray-50 border-dashed">
               <UIcon name="i-heroicons-cog-6-tooth-solid" class="w-16 h-16 mb-4 text-pop-pink" />
               <h4 class="text-2xl font-black mb-2">WRITING IN PROGRESS</h4>
               <p class="text-gray-600 mb-6">Compiling thoughts on Linux, Architecture, and Gaming benchmarks.</p>
               <UButton class="border-2 border-black" @click="handleNotify">Notify Me</UButton>
            </div>
         </section>
         
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

      </main>
    </div>
  </UApp>
</template>



<style>
html {
  scroll-behavior: smooth;
}
</style>
