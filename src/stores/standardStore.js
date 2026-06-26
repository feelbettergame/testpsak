import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as API from '../api/endpoints'

export const useStandardStore = defineStore('standard', () => {
  const standards = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchStandards = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await API.getStandards()
      standards.value = response.data
    } catch (err) {
      error.value = err.message
      console.error('Error:', err)
    } finally {
      loading.value = false
    }
  }

  const activeStandards = computed(() => standards.value.filter(s => s.status === 'active'))

  return { standards, loading, error, fetchStandards, activeStandards }
})