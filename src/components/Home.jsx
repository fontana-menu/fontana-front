import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useContext } from 'react'
import { Lang } from '../context/Lang.context'

const Home = () => {
  const { lang } = useContext(Lang)
  return (
    <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
      <Title>{lang === 'es' ? 'Restaurante La Fontana' : 'Restaurant La Fontana'}</Title>
      <CustomLink to='/carta'>Carta</CustomLink>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Title = styled.h1`
  margin: 200px 0 80px;
  color: white;
  font-size: 3rem;
  line-height: 3.75rem;
  font-family: ModernLove, serif;
  text-align: center;
`
const CustomLink = styled(Link)`
  color: white;
  font-size: 2em;
`
