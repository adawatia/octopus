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

const updatePosition = (e) => {
  if (!e) return
  
  x.value = e.clientX
  y.value = e.clientY
  
  // Check if hovering over clickable elements with proper null checks
  const target = e.target
  if (target) {
    const isClickable = target.tagName === 'A' || 
                       target.tagName === 'BUTTON' || 
                       target.closest?.('a') || 
                       target.closest?.('button')
    isHovering.value = Boolean(isClickable)
  } else {
    isHovering.value = false
  }
}

let mounted = false

onMounted(() => {
  mounted = true
  window.addEventListener('mousemove', updatePosition)
})

onUnmounted(() => {
  mounted = false
  window.removeEventListener('mousemove', updatePosition)
})
</script>
