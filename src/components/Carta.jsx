import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import Group from './Group'
import Header from './Header'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Lang } from '../context/Lang.context'
import { motion } from 'framer-motion'

const Carta = () => {
  const { menu, fetchFood } = useContext(Recipes)
  const { lang } = useContext(Lang)
  const [parent] = useAutoAnimate({ duration: 400 })

  useEffect(() => {
    fetchFood()
  }, [fetchFood])

  if (!menu.es || !menu.cat) return null

  if (lang === 'es')
    return (
      <motion.div
        style={{ width: '100%' }}
        initial={{ y: window.innerHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: window.innerHeight, opacity: 0 }}
      >
        <Header />
        <Wrapper ref={parent}>
          {menu.es.categories.map((item, i) => (
            <Group category={item} recipes={menu.es.recipes.filter(recipe => recipe.category === item)} key={i} />
          ))}
        </Wrapper>
      </motion.div>
    )

  if (lang === 'cat')
    return (
      <motion.div
        style={{ width: '100%' }}
        initial={{ y: window.innerHeight }}
        animate={{ y: 0 }}
        exit={{ y: window.innerHeight }}
      >
        <Header />
        <Wrapper ref={parent}>
          {menu.cat.categories.map((item, i) => (
            <Group category={item} recipes={menu.cat.recipes.filter(recipe => recipe.category === item)} key={i} />
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
