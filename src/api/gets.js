import { api } from './axios.config'

export const getFood = () => api.get('/food')

export const checkUser = () => api.get('/verify', { withCredentials: true })

export const logOut = () => api.get('/logout', { withCredentials: true })
