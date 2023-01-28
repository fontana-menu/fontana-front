import { useContext } from 'react'
import styled from 'styled-components'
import { Lang } from '../context/lang.context'

const Header = () => {
  const { setLang } = useContext(Lang)
  return (
    <Wrapper>
      <img onClick={() => setLang('es')} src='/images/icons8-spain-flag-48.png' alt='es' width={35} />
      <img onClick={() => setLang('cat')} src='/images/catalonia-icon-flag.png' alt='cat' width={35} />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  column-gap: 1em;
  align-items: center;
  justify-content: flex-end;
  > img:hover {
    cursor: pointer;
  }
`
