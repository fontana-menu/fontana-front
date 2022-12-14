import { api } from './axios.config'

export const getFood = () => api.get('/food')
