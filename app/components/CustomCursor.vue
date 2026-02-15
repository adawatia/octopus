<template>
  <div 
    class="fixed pointer-events-none z-[9999] mix-blend-exclusion transition-transform duration-100 ease-out hidden md:block"
    :style="{ 
      left: `${x}px`, 
      top: `${y}px`,
      transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
    }"
  >
    <div class="w-8 h-8 rounded-full bg-white border-2 border-black"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Initialize cursor to center of screen
const x = ref(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
const y = ref(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)
const isHovering = ref(false)

// Use requestAnimationFrame for performance (throttles to 60fps max)
let rafId = null

const updatePosition = (e) => {
  if (!e) return
  
  // Only schedule one animation frame at a time
  if (rafId) return
  
  rafId = requestAnimationFrame(() => {
    x.value = e.clientX
    y.value = e.clientY
    
    // Optimized element check using matches API
    const target = e.target
    if (target && target instanceof Element) {
      // More efficient check using matches() instead of multiple closests()
      isHovering.value = target.matches('a, button, [role="button"]') || 
                         (target.closest && target.closest('a, button, [role="button"]') !== null)
    } else {
      isHovering.value = false
    }
    
    rafId = null
  })
}

onMounted(() => {
  // Use passive event listener for better scrolling performance
  window.addEventListener('mousemove', updatePosition, { passive: true })
})

onUnmounted(() => {
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
  window.removeEventListener('mousemove', updatePosition)
})
</script>

