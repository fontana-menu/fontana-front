import { useContext } from 'react'
// import styled from 'styled-components'
import Group, { AdminGroup } from '../Group'
import { Lang } from '../../context/Lang.context'
import { motion } from 'framer-motion'
import { /* Link,  */ Navigate, useLoaderData } from 'react-router-dom'
import Carta from '../Carta'
import { Auth } from '../../context/Auth.context'
import { ModalContext } from '../../context/Modals.context'

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
            key={i}
            category={item}
            recipes={menu[lang].recipes.filter(recipe => recipe.category === item)}
            info={i === 7}
          />
        ))}
      </Carta>
    </motion.div>
  )
}
export default Food

export const AdminFood = () => {
  const { modal } = useContext(ModalContext)
  const { isLoggedIn } = useContext(Auth)
  const { menu } = useLoaderData()
  const { lang } = useContext(Lang)

  if (isLoggedIn === false) return <Navigate to='/' />

  return (
    <motion.div
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      initial={{ y: window.innerHeight }}
      animate={{ y: 0 }}
    >
      {modal.isVisible && modal.component}
      <Carta>
        {/* <Heading>
          <Link to='/vinos'>{lang === 'es' ? 'Bebidas' : 'Begudes'}</Link>
        </Heading> */}
        {menu[lang].categories.map((item, i) => (
          <AdminGroup
            key={i}
            index={i}
            category={item}
            categoriesLists={{ es: menu.es.categories, cat: menu.cat.categories }}
            recipes={menu[lang].recipes.filter(recipe => recipe.category === item)}
            info={i === 7}
          />
        ))}
      </Carta>
    </motion.div>
  )
}

/* const Heading = styled.div`
  display: flex;
  align-items: center;
` */
