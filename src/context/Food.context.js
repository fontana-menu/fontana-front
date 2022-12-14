import { createContext, useCallback, /* useEffect, */ useState } from 'react'
import { getFood } from '../api/gets'

export const Recipes = createContext()

const RecipesProvider = ({ children }) => {
  const [menu, setMenu] = useState({})

  const fetchFood = useCallback(async () => {
    try {
      const res = await getFood()
      const carta = res.data
      setMenu(carta)
    } catch (err) {
      console.log('Error fetching menu: ', err)
    }
  }, [])

  /* useEffect(() => {
    fetchFood()
  }, [fetchFood]) */

  return <Recipes.Provider value={{ menu, fetchFood }}>{children}</Recipes.Provider>
}
export default RecipesProvider
