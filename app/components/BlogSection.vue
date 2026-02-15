<script setup lang="ts">
const toast = useToast()

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
</script>

<template>
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
</template>
