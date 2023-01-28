import { useAutoAnimate } from '@formkit/auto-animate/react'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import { Lang } from '../context/Lang.context'
import Carta from './Carta'
import Group from './Group'

const Drinks = () => {
  const { drinks, fetchDrinks } = useContext(Recipes)
  const { lang } = useContext(Lang)
  const [parent] = useAutoAnimate({ duration: 400 })

  useEffect(() => {
    fetchDrinks()
  }, [fetchDrinks])

  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ y: window.innerHeight, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: window.innerHeight, opacity: 0 }}
    >
      <Carta ref={parent}>
        <Heading>
          <Link to='/carta'>Carta</Link>
        </Heading>
        {drinks[lang].categories.map((item, i) => (
          <Group
            index={i}
            category={item}
            recipes={drinks[lang].drinks.filter(recipe => recipe.category === item)}
            key={i}
          />
        ))}
      </Carta>
    </motion.div>
  )
}

export default Drinks

const Heading = styled.div`
  display: flex;
  align-items: center;
`
