<template>
  <div class="fixed top-0 left-0 w-full z-50 bg-pop-yellow border-b-3 border-black overflow-hidden py-2 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)]">
    <div class="marquee-wrapper">
      <div class="marquee-content inline-block whitespace-nowrap animate-marquee">
        <span v-for="i in 10" :key="i" class="mx-4 font-black text-sm md:text-base tracking-widest text-black">
          ★ OPEN FOR WORK ★ VUE ★ NUXT ★ CREATIVE ★ DESIGN ★
        </span>
      </div>
      <!-- Duplicate content for seamless loop -->
      <div class="marquee-content inline-block whitespace-nowrap animate-marquee" aria-hidden="true">
        <span v-for="i in 10" :key="`dup-${i}`" class="mx-4 font-black text-sm md:text-base tracking-widest text-black">
          ★ OPEN FOR WORK ★ VUE ★ NUXT ★ CREATIVE ★ DESIGN ★
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
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Respect user's motion preferences for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
  }
}
</style>
