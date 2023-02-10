import { useContext } from 'react'
import { Navigate, useLoaderData } from 'react-router-dom'
import { Lang } from '../../context/Lang.context'
import { motion } from 'framer-motion'
import Carta from '../Carta'
import Group from '../Group'
import { Auth } from '../../context/Auth.context'

const Delivery = () => {
  const { pizzas } = useLoaderData()
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
        <Group index={0} category={pizzas[lang][0].category} recipes={pizzas[lang]} info={true} />
      </Carta>
    </motion.div>
  )
}

export default Delivery

export const AdminDelivery = () => {
  const { isLoggedIn } = useContext(Auth)
  const { pizzas } = useLoaderData()
  const { lang } = useContext(Lang)

  if (!isLoggedIn) return <Navigate to='/' />

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
        <Group index={0} category={pizzas[lang][0].category} recipes={pizzas[lang]} info={true} />
      </Carta>
    </motion.div>
  )
}
