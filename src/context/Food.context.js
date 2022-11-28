import { createContext, useEffect, useState } from 'react'
import { getFood } from '../api/gets'

export const Recipes = createContext()

const RecipesProvider = ({ children }) => {
  const [menu, setMenu] = useState([])

  const fetchFood = async (lang = 'es') => {
    try {
      const res = await getFood(lang)
      const recipes = res.data
      setMenu(recipes)
    } catch (err) {
      console.log('Error fetching menu: ', err)
    }
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return <Recipes.Provider value={menu}>{children}</Recipes.Provider>
}
export default RecipesProvider
