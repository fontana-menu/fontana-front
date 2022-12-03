import { createContext, useContext, useEffect, useState } from 'react'
import { getFood } from '../api/gets'
import { Lang } from './lang.context'

export const Recipes = createContext()

const RecipesProvider = ({ children }) => {
  const [menu, setMenu] = useState([])
  const { lang } = useContext(Lang)

  const fetchFood = async () => {
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
  }, [lang])

  return <Recipes.Provider value={menu}>{children}</Recipes.Provider>
}
export default RecipesProvider
