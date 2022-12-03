import { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { Recipes } from '../context/Food.context'
import { categories } from '../utils/constants'
import Group from './Group'
import Header from './Header'

const Carta = () => {
  const menu = useContext(Recipes)

  return (
    <>
      <Header />
      <Wrapper>
        {categories.map((item, i) => (
          <Group category={item} recipes={menu.filter(recipe => recipe.category === item)} key={i} />
        ))}
      </Wrapper>
    </>
  )
}

export default Carta

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(500px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const Wrapper = styled.div`
  min-height: 1000px;
  width: 60%;
  padding: 35px 3% 50px;
  margin: 20px 0;
  display: inline-flex;
  flex-direction: column;
  row-gap: 15px;
  box-shadow: 0px 0px 50px 20px black;
  border-radius: 38px 38px 38px 38px / 80px 80px 80px 80px;
  position: relative;
  background-image: url(/images/paper-texture.jpeg);
  background-repeat: repeat-y;
  background-size: contain;
  animation: ${appear} 2s ease;
`
