<template>
  <div class="fixed top-0 left-0 w-full z-50 bg-pop-yellow border-b-3 border-black overflow-hidden py-2 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)]">
    <div class="marquee-wrapper">
      <div class="marquee-content inline-block whitespace-nowrap animate-marquee">
        <span v-for="i in 5" :key="i" class="mx-4 font-black text-sm md:text-base tracking-widest text-black">
          ★ OPEN FOR WORK ★ VUE ★ NUXT ★ FASTAPI ★ DJANGO ★ CREATIVE ★ DESIGN ★
        </span>
      </div>
      <!-- Duplicate content for seamless loop -->
      <div class="marquee-content inline-block whitespace-nowrap animate-marquee" aria-hidden="true">
        <span v-for="i in 5" :key="`dup-${i}`" class="mx-4 font-black text-sm md:text-base tracking-widest text-black">
          ★ OPEN FOR WORK ★ VUE ★ NUXT ★ FASTAPI ★ DJANGO ★ CREATIVE ★ DESIGN ★
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  display: inline-flex;
}

.animate-marquee {
  animation: marquee 20s linear infinite;
  /* Force GPU acceleration for smooth 60fps animation */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

@keyframes marquee {
  /* Use translate3d for GPU acceleration */
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

/* Faster animation on mobile for fewer duplicates */
@media (max-width: 768px) {
  .animate-marquee {
    animation-duration: 15s;
  }
}

/* Respect user's motion preferences for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
    will-change: auto;
  }
}
</style>
