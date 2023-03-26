import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const show = ref(false)
  function toggle() {
    show.value = !show.value
  }

  return { show, toggle }
})
