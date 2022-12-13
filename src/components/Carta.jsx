import { useContext } from 'react'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import { categories_es, categories_cat } from '../utils/constants'
import Group from './Group'
import Header from './Header'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Lang } from '../context/lang.context'

const Carta = () => {
  const menu = useContext(Recipes)
  const { lang } = useContext(Lang)
  const [parent] = useAutoAnimate({ duration: 400 })

  if (lang === 'es')
    return (
      <>
        <Header />
        <Wrapper ref={parent}>
          {categories_es.map((item, i) => (
            <Group category={item} recipes={menu?.filter(recipe => recipe.category === item)} key={i} />
          ))}
        </Wrapper>
      </>
    )

  if (lang === 'cat')
    return (
      <>
        <Header />
        <Wrapper ref={parent}>
          {categories_cat.map((item, i) => (
            <Group category={item} recipes={menu?.filter(recipe => recipe.category === item)} key={i} />
          ))}
        </Wrapper>
      </>
    )
}

export default Carta

const Wrapper = styled.div`
  width: 60%;
  padding: 35px 3% 50px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  box-shadow: 0px 0px 50px 20px black;
  border-radius: 38px 38px 38px 38px / 80px 80px 80px 80px;
  position: relative;
  background-image: url(/images/paper-texture.jpeg);
  background-repeat: repeat-y;
  background-size: contain cover;
`
