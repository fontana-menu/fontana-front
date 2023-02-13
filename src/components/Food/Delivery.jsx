import { useContext } from 'react'
import { Navigate, useLoaderData } from 'react-router-dom'
import { Lang } from '../../context/Lang.context'
import { motion } from 'framer-motion'
import Carta from '../Carta'
import Group, { AdminGroup } from '../Group'
import { Auth } from '../../context/Auth.context'
import { ModalContext } from '../../context/Modals.context'

const Delivery = () => {
  const { deliveryMenu } = useLoaderData()
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
        {deliveryMenu[lang].categories.map((item, i) => (
          <Group
            index={i}
            category={item}
            recipes={deliveryMenu[lang].recipes.filter(recipe => recipe.category === item)}
            key={i}
            info={i === 1}
          />
        ))}
      </Carta>
    </motion.div>
  )
}

export default Delivery

export const AdminDelivery = () => {
  const { modal } = useContext(ModalContext)
  const { isLoggedIn } = useContext(Auth)
  const { deliveryMenu } = useLoaderData()
  const { lang } = useContext(Lang)

  if (!isLoggedIn) return <Navigate to='/' />

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
        {deliveryMenu[lang].categories.map((item, i) => (
          <AdminGroup
            index={i}
            category={item}
            categoriesLists={{ es: deliveryMenu.es.categories, cat: deliveryMenu.cat.categories }}
            recipes={deliveryMenu[lang].recipes.filter(recipe => recipe.category === item)}
            key={i}
            info={i === 1}
          />
        ))}
      </Carta>
    </motion.div>
  )
}
