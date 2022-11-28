import { useContext } from 'react'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import { categories } from '../utils/constants'
import Group from './Group'

const Home = () => {
  const menu = useContext(Recipes)

  return (
    <Wrapper>
      {categories.map((item, i) => (
        <Group category={item} recipes={menu.filter(recipe => recipe.category === item)} key={i} />
      ))}
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  min-height: 1000px;
  width: 60%;
  border: 1px solid black;
  padding: 0 3%;
`
