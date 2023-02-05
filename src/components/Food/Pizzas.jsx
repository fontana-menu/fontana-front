import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Lang } from '../../context/Lang.context'
import { motion } from 'framer-motion'
import Carta from '../Carta'
import Group from '../Group'

const Pizzas = () => {
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

export default Pizzas
