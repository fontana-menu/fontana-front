import { useContext } from 'react'
// import styled from 'styled-components'
import Group from '../Group'
import { Lang } from '../../context/Lang.context'
import { motion } from 'framer-motion'
import { /* Link,  */ useLoaderData } from 'react-router-dom'
import Carta from '../Carta'

const Food = () => {
  const { menu } = useLoaderData()
  const { lang } = useContext(Lang)

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
            info={i === 7}
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
