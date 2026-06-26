import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as API from '../api/endpoints'

export const useDashboardStore = defineStore('dashboard', () => {
  const stats = ref({ activeStandards: 47, interpretations: 23, guidelines: 12, updates: 8 })
  const loading = ref(false)

  const fetchStats = async () => {
    loading.value = true
    try {
      const response = await API.getDashboardStats()
      stats.value = response.data
    } catch (err) {
      console.error('Error:', err)
    } finally {
      loading.value = false
    }
  }

  return { stats, loading, fetchStats }
})