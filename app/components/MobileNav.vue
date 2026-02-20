<template>
  <nav class="mobile-nav">
    <a href="#about" class="nav-item">
      <UIcon name="i-heroicons-user-circle-solid" class="w-6 h-6" />
      <span>About</span>
    </a>
    <a href="#experience" class="nav-item">
      <UIcon name="i-heroicons-bolt-solid" class="w-6 h-6" />
      <span>Quests</span>
    </a>
    <a href="#work" class="nav-item">
      <UIcon name="i-heroicons-rocket-launch-solid" class="w-6 h-6" />
      <span>Projects</span>
    </a>
    <a href="#blog" class="nav-item">
      <UIcon name="i-heroicons-document-text-solid" class="w-6 h-6" />
      <span>Blog</span>
    </a>
  </nav>
</template>

<style scoped>
.mobile-nav {
  @apply fixed bottom-0 left-0 right-0 z-50;
  @apply bg-white border-t-[3px] border-black;
  @apply flex justify-around items-center;
  @apply px-4 py-3;
  @apply shadow-[0px_-4px_0px_0px_#000];
  display: none;
}

@media (max-width: 768px) {
  .mobile-nav {
    display: flex;
  }
}

.nav-item {
  @apply flex flex-col items-center gap-1;
  @apply text-xs font-bold;
  @apply transition-all duration-200;
  @apply cursor-pointer;
  min-width: 60px;
}

.nav-item:active {
  @apply scale-95;
}

.nav-item:hover {
  @apply text-pop-purple;
}

.nav-item:hover :deep(svg) {
  @apply text-pop-purple;
  transform: scale(1.1);
}
</style>
