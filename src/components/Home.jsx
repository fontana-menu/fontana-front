import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { Lang } from '../context/Lang.context'

const Home = () => {
  const { lang } = useContext(Lang)
  return (
    <motion.div style={{ textAlign: 'center' }} initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: -window.innerHeight }}>
      <Title>{lang === 'es' ? 'Restaurante La Fontana' : 'Restaurant La Fontana'}</Title>
      <CustomLink to='/carta'>Carta</CustomLink>
    </motion.div>
  )
}

export default Home

const Title = styled.h1`
  margin: 200px 0 80px;
  color: white;
  font-size: 4em;
  font-family: ModernLove, serif;
`
const CustomLink = styled(Link)`
  color: white;
  font-size: 2em;
`
