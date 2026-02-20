<script setup lang="ts">
import { seoData } from '~/data'

const config = useRuntimeConfig()

// Force light mode
const colorMode = useColorMode()
colorMode.preference = 'light'

const confettiInterval = ref<any>(null)
const celebrationSound = ref<HTMLAudioElement | null>(null)

const triggerCelebration = async () => {
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
  
  // Dynamically import confetti only when needed (saves 58KB from initial bundle)
  let confetti: any
  try {
    const confettiModule: any = await import('canvas-confetti')
    // Handle both ESM default export and CommonJS module.exports
    confetti = confettiModule.default || confettiModule
    
    // Safety check
    if (typeof confetti !== 'function') {
        // Fallback or further checks can be added here if needed
    }
  } catch (error) {
    console.error('Failed to load confetti:', error)
    return
  }
  
  if (!confetti) return
  
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

// Performance Monitoring
onMounted(() => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log to console for now, could be sent to analytics
          if (process.env.NODE_ENV === 'development') {
             console.log(`[Perf] ${entry.name}:`, entry.startTime, entry)
          }
        }
      })
      
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] })
    } catch (e) {
      // Ignore if not supported
    }
  }
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
      
      <main class="container mx-auto px-4 md:px-6 pt-12 md:pt-16 relative z-10 max-w-6xl pb-24 md:pb-8">
        <!-- Desktop Navbar -->
        <nav class="hidden md:flex justify-between items-center mb-20 cartoon-box p-4 bg-white sticky top-4 z-50">
          <h1 
            @click="triggerCelebration" 
            class="text-xl md:text-2xl font-black cartoon-title bg-pop-yellow border-2 border-black shadow-hover px-3 py-1 -rotate-2 cursor-pointer active:scale-95 transition-transform select-none"
          >
              ADAWATIA
          </h1>
          <div class="flex gap-6 font-bold text-sm">
            <a @click.prevent="scrollToSection('about')" href="#about" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-cyan transition-all cursor-pointer">ABOUT</a>
            <a @click.prevent="scrollToSection('experience')" href="#experience" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-pink transition-all cursor-pointer">QUESTS</a>
            <a @click.prevent="scrollToSection('work')" href="#work" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-yellow transition-all cursor-pointer">PROJECTS</a>
            <a @click.prevent="scrollToSection('reading')" href="#reading" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-pink transition-all cursor-pointer">LIBRARY</a>
            <a @click.prevent="scrollToSection('blog')" href="#blog" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-orange transition-all cursor-pointer">BLOG</a>
          </div>
        </nav>

        <!-- Mobile Floating Bottom Navbar -->
        <nav class="md:hidden fixed bottom-4 left-4 right-4 z-50 cartoon-box bg-white p-2.5 flex justify-around items-center gap-1">
          <!-- ADAWATIA Badge on Corner -->
          <div 
             @click="triggerCelebration"
             class="absolute -top-3 -left-2 z-50 cursor-pointer active:scale-95 transition-transform select-none"
          >
            <div class="text-[10px] font-black cartoon-title bg-pop-yellow border-2 border-black shadow-hover px-2 py-1 -rotate-6 whitespace-nowrap">
              ADAWATIA
            </div>
          </div>

          <a @click.prevent="scrollToSection('about')" href="#about" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-cyan transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-user-circle-solid" class="w-5 h-5" />
            <span>ABOUT</span>
          </a>
          <a @click.prevent="scrollToSection('experience')" href="#experience" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-pink transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-bolt-solid" class="w-5 h-5" />
            <span>QUESTS</span>
          </a>
          <a @click.prevent="scrollToSection('work')" href="#work" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-yellow transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-rocket-launch-solid" class="w-5 h-5" />
            <span>PROJECTS</span>
          </a>
          <a @click.prevent="scrollToSection('reading')" href="#reading" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-pink transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-book-open-solid" class="w-5 h-5" />
            <span>LIBRARY</span>
          </a>
          <a @click.prevent="scrollToSection('blog')" href="#blog" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-orange transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-document-text-solid" class="w-5 h-5" />
            <span>BLOG</span>
          </a>
        </nav>

        <!-- Lazy Loaded Sections -->
          <HeroSection @celebrate="triggerCelebration" />
          <LazyAboutSection />
          <LazyExperienceSection />
          <LazyProjectsSection />
          <LazyPublicationsSection />
          <LazyReadingSection />
          <LazyBlogSection />
          <LazyFooterSection />

      </main>
    </div>
  </UApp>
</template>



<style>
html {
  scroll-behavior: smooth;
}
</style>
