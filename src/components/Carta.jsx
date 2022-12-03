import { useContext } from 'react'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import { categories } from '../utils/constants'
import Group from './Group'

const Carta = () => {
  const menu = useContext(Recipes)

  return (
    <Wrapper>
      {categories.map((item, i) => (
        <Group category={item} recipes={menu.filter(recipe => recipe.category === item)} key={i} />
      ))}
    </Wrapper>
  )
}

export default Carta

const Wrapper = styled.div`
  min-height: 1000px;
  width: 60%;
  padding: 0 3%;
  margin: 20px 0;
  display: inline-block;
  /* border: 3px solid #6b6b6b; */
  border-radius: 2% 3% 4% 4% / 2% 2% 3% 4%;
  position: relative;
  background-image: url(/images/paper-texture.jpeg);
  background-repeat: repeat-y;
  background-size: contain;
`
