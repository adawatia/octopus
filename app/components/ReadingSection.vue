<script setup lang="ts">
import { readingList } from '~/data'
import { ref, computed, watch } from 'vue'

const filterStatus = ref('All')
const statuses = ['All', 'Reading', 'Read', 'To Read', 'Dropped', 'On Hold']

const filteredReadingList = computed(() => {
  if (filterStatus.value === 'All') return readingList
  return readingList.filter(item => item.status.toLowerCase() === filterStatus.value.toLowerCase())
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = 6

const totalPages = computed(() => Math.ceil(filteredReadingList.value.length / itemsPerPage))

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredReadingList.value.slice(start, end)
})

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

// Reset page when filter changes
watch(filterStatus, () => {
    currentPage.value = 1
})

const getFilterColor = (status: string) => {
    const s = status.toLowerCase()
    if (s === 'dropped') return 'bg-pop-orange text-white'
    if (s === 'on hold') return 'bg-gray-200 text-black'
    return 'bg-pop-yellow text-black'
}
</script>

<template>
  <section id="reading" class="mb-16 md:mb-32 scroll-mt-24">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12">
        <h3 class="text-2xl md:text-3xl font-black cartoon-title flex items-center gap-3 md:gap-4">
          <div class="w-12 h-12 bg-pop-orange rounded-lg border-[3px] border-black shadow-hard flex items-center justify-center text-white">
            <UIcon name="i-heroicons-book-open-solid" class="w-6 h-6" />
          </div>
          LIBRARY
        </h3>

        <!-- Filter -->
        <div class="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button 
                v-for="status in statuses" 
                :key="status"
                @click="filterStatus = status"
                class="px-3 py-1.5 rounded-lg text-xs font-black uppercase border-2 border-black transition-all active:scale-95"
                :class="filterStatus === status ? getFilterColor(status) + ' shadow-hover' : 'bg-white text-black hover:bg-gray-100'"
            >
                {{ status }}
            </button>
        </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
      <TransitionGroup name="list">
        <ReadingCard 
            v-for="(item, index) in paginatedList"
            :key="item.title"
            v-bind="item"
            class="h-full"
        />
      </TransitionGroup>
    </div>
    
    <!-- Empty State -->
    <div v-if="filteredReadingList.length === 0" class="cartoon-box p-8 text-center bg-gray-50 flex flex-col items-center justify-center min-h-[200px]">
        <UIcon name="i-heroicons-book-open" class="w-12 h-12 text-gray-300 mb-4" />
        <p class="font-bold text-gray-400">No items found in this category</p>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 mt-12">
        <button 
            @click="prevPage" 
            :disabled="currentPage === 1"
            class="px-4 py-2 bg-white border-2 border-black rounded-lg font-black shadow-hover hover:scale-95 transition-transform disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2"
        >
            <UIcon name="i-heroicons-arrow-left-20-solid" class="w-4 h-4" />
            PREV
        </button>
        
        <span class="font-black text-sm bg-pop-purple text-white px-3 py-1 rounded border-2 border-black shadow-sm">
            {{ currentPage }} / {{ totalPages }}
        </span>

        <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages"
            class="px-4 py-2 bg-white border-2 border-black rounded-lg font-black shadow-hover hover:scale-95 transition-transform disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2"
        >
            NEXT
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
        </button>
    </div>
  </section>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
  width: 100%; /* Important for grid layout transitions to work smoothly */
  display: none; /* simple fix for grid gap jumping */
}
</style>
