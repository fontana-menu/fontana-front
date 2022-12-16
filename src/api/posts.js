import { api } from './axios.config'

export const login = data => api.post('/login', data, { withCredentials: true })

export const createRecipe = data => api.post('/food', data, { withCredentials: true })
