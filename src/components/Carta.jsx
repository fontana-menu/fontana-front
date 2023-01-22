import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import Group from './Group'
import Header from './Header'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Lang } from '../context/Lang.context'
import { motion } from 'framer-motion'
import { copies } from '../utils/constants'

const Carta = () => {
  const { menu, fetchFood } = useContext(Recipes)
  const { lang } = useContext(Lang)
  const [parent] = useAutoAnimate({ duration: 400 })

  const ExtraIngredients = (
    <>
      <SuplsTitle>{copies[lang].title}</SuplsTitle>
      <Text>{copies[lang].normal}</Text>
      <Text>{copies[lang].special}</Text>
      <Text>{copies[lang].smoked}</Text>
      <Text2>{copies[lang].alergies}</Text2>
    </>
  )

  useEffect(() => {
    fetchFood()
  }, [fetchFood])

  if (!menu.es || !menu.cat) return null

  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ y: window.innerHeight, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: window.innerHeight, opacity: 0 }}
    >
      <Header />
      <Wrapper ref={parent}>
        {menu[lang].categories.map((item, i) => (
          <>
            <Group
              id={item}
              index={i}
              category={item}
              recipes={menu[lang].recipes.filter(recipe => recipe.category === item)}
              key={i}
            />
            {i === 7 && ExtraIngredients}
          </>
        ))}
      </Wrapper>
    </motion.div>
  )
}

export default Carta

const Wrapper = styled.div`
  width: 60%;
  padding: 35px 3% 50px;
  margin: 20px auto;
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

const SuplsTitle = styled.h3`
  margin-top: 30px;
  text-transform: uppercase;
  text-decoration: underline;
`
const Text = styled.p`
  line-height: 0.6rem;
`
const Text2 = styled.p`
  margin-top: 15px;
`
