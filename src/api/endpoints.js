import api from './axios'

export const getStandards = () => api.get('/standards')
export const getStandardById = (id) => api.get(`/standards/${id}`)
export const createStandard = (data) => api.post('/standards', data)
export const updateStandard = (id, data) => api.put(`/standards/${id}`, data)
export const deleteStandard = (id) => api.delete(`/standards/${id}`)

export const getInterpretations = () => api.get('/interpretations')
export const getInterpretationById = (id) => api.get(`/interpretations/${id}`)

export const getImplementationGuides = () => api.get('/implementation')
export const getImplementationGuideById = (id) => api.get(`/implementation/${id}`)

export const getUpdates = () => api.get('/updates')
export const getUpdateById = (id) => api.get(`/updates/${id}`)

export const getDashboardStats = () => api.get('/dashboard/stats')
export const searchStandards = (query) => api.get('/search', { params: { q: query } })