import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getFood } from '../api/gets'

const Home = () => {
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

  return (
    <Wrapper>
      {menu.map(recipe => (
        <Recipe>
          <h2>{recipe.name}</h2>
          {recipe.description && <p>{recipe.description}</p>}
        </Recipe>
      ))}
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  min-height: 1000px;
  width: 1000px;
  border: 1px solid black;
`
const Recipe = styled.div`
  margin: 10px 0 10px 5px;
  > h2 {
    text-transform: capitalize;
  }
`
