import { api } from './axios.config'

export const login = data => api.post('/login', data, { withCredentials: true })

export const createRecipe = data => api.post('/food', data, { withCredentials: true })

export const editRecipe = (id, data) => api.put(`/food/${id}`, data, { withCredentials: true })

export const deleteRecipe = id => api.delete(`/food/${id}`, { withCredentials: true })
