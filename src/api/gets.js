import { api } from './axios.config'

export const getFood = async () => {
  const res = await api.get('/food')
  const menu = res.data
  return { menu }
}

export const getPizzas = async () => {
  const res = await api.get('/food/pizzas')
  const pizzas = res.data
  return { pizzas }
}

export const getDrinks = () => api.get('/drinks')

export const getRecipe = id => api.get(`food/${id}`)

export const checkUser = async () => {
  try {
    const res = await api.get('/verify', { withCredentials: true })
    const user = res.data
    return user
  } catch (err) {
    return err.response.data
  }
}

export const logOut = () => api.get('/logout', { withCredentials: true })
