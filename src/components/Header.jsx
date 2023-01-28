import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Lang } from '../context/Lang.context'
import { AiOutlineLeft } from 'react-icons/ai'

const Header = () => {
  const { lang, setLang } = useContext(Lang)
  const { pathname } = useLocation()
  return (
    <Wrapper>
      <Flags>
        <img onClick={() => setLang('es')} src='/images/icons8-spain-flag-48.png' alt='es' width={35} />
        <img onClick={() => setLang('cat')} src='/images/catalonia-icon-flag.png' alt='cat' width={35} />
      </Flags>
      <Link style={{ color: '#a3a3a3', display: pathname === '/' ? 'none' : 'flex', alignItems: 'center' }} to='/'>
        <AiOutlineLeft />
        {lang === 'es' ? 'Inicio' : 'Inici'}
      </Link>
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
  flex-direction: row-reverse;
  justify-content: space-between;
  column-gap: 1em;
  z-index: 2;
  img:hover {
    cursor: pointer;
  }
`
const Flags = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  justify-self: end;
`
