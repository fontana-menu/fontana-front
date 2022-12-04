import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <Title>Restaurante La Fontana</Title>
      <CustomLink to='/carta'>Carta</CustomLink>
    </>
  )
}

export default Home

const Title = styled.h1`
  margin-top: 4em;
  color: white;
  font-size: 4em;
  font-family: ModernLove, serif;
`
const CustomLink = styled(Link)`
  font-size: 2em;
  color: white;
`
