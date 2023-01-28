import { createContext, useCallback, /* useEffect, */ useState } from 'react'
import { getDrinks, getFood } from '../api/gets'

export const Recipes = createContext()

const RecipesProvider = ({ children }) => {
  const [menu, setMenu] = useState({})
  const [drinks, setDrinks] = useState({})

  const fetchFood = useCallback(async () => {
    try {
      const res = await getFood()
      const carta = res.data
      setMenu(carta)
    } catch (err) {
      console.log('Error fetching menu: ', err)
    }
  }, [])

  const fetchDrinks = useCallback(async () => {
    try {
      const res = await getDrinks()
      const bebidas = res.data
      setDrinks(bebidas)
    } catch (err) {
      console.log('Error fetching drinks: ', err)
    }
  }, [])

  return <Recipes.Provider value={{ menu, drinks, fetchFood, fetchDrinks }}>{children}</Recipes.Provider>
}
export default RecipesProvider
