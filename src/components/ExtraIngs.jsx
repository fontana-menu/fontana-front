import { useContext } from 'react'
import styled from 'styled-components'
import { Lang } from '../context/Lang.context'
import { copies } from '../utils/constants'

const ExtraIngs = () => {
  const { lang } = useContext(Lang)
  return (
    <Wrapper>
      <SuplsTitle>{copies[lang].title}</SuplsTitle>
      <p>{copies[lang].normal}</p>
      <p>{copies[lang].special}</p>
      <p>{copies[lang].smoked}</p>
      <p>{copies[lang].alergies}</p>
    </Wrapper>
  )
}

export default ExtraIngs

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  p:nth-child(4) {
    margin-bottom: 10px;
  }
`
const SuplsTitle = styled.h3`
  text-transform: uppercase;
  text-decoration: underline;
  margin-bottom: 10px;
`
