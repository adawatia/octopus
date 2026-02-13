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

const x = ref(-100)
const y = ref(-100)
const isHovering = ref(false)

const updatePosition = (e) => {
  x.value = e.clientX
  y.value = e.clientY
  
  // Check if hovering over clickable elements
  const target = e.target
  if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button'))) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', updatePosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition)
})
</script>
