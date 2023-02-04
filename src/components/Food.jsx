import { useContext } from 'react'
import styled from 'styled-components'
import Group from './Group'
import { Lang } from '../context/Lang.context'
import { motion } from 'framer-motion'
import { copies } from '../utils/constants'
import { /* Link,  */ useLoaderData } from 'react-router-dom'
import Carta from './Carta'

const Food = () => {
  const { menu } = useLoaderData()
  const { lang } = useContext(Lang)

  const ExtraIngredients = (
    <>
      <SuplsTitle>{copies[lang].title}</SuplsTitle>
      <Text>{copies[lang].normal}</Text>
      <Text>{copies[lang].special}</Text>
      <Text>{copies[lang].smoked}</Text>
      <Text2>{copies[lang].alergies}</Text2>
    </>
  )

  return (
    <motion.div
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      initial={{ y: window.innerHeight }}
      animate={{ y: 0 }}
    >
      <Carta>
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
