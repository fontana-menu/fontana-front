import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import Group from './Group'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Lang } from '../context/Lang.context'
import { motion } from 'framer-motion'
import { copies } from '../utils/constants'
// import { Link } from 'react-router-dom'
import Carta from './Carta'

const Food = () => {
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
    >
      <Carta ref={parent}>
        {/* <Heading>
          <Link to='/vinos'>{lang === 'es' ? 'Bebidas' : 'Begudes'}</Link>
        </Heading> */}
        {menu[lang].categories.map((item, i) => (
          <Group
            index={i}
            category={item}
            recipes={menu[lang].recipes.filter(recipe => recipe.category === item)}
            key={i}
            info={i === 7 ? ExtraIngredients : null}
          />
        ))}
      </Carta>
    </motion.div>
  )
}
export default Food

/* const Heading = styled.div`
  display: flex;
  align-items: center;
` */
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
