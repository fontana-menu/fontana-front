import { api } from './axios.config'

export const getFood = lang => api.get(`/${lang}/food`)
