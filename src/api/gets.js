import { api } from './axios.config'

export const getFood = () => api.get('/food')

export const getDrinks = () => api.get('/drinks')

export const getRecipe = id => api.get(`food/${id}`)

export const checkUser = () => api.get('/verify', { withCredentials: true })

export const logOut = () => api.get('/logout', { withCredentials: true })
