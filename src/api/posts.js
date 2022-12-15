import { api } from './axios.config'

export const login = data => api.post('/login', data, { withCredentials: true })
