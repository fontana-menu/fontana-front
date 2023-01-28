import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import Group from './Group'
import Header from './Header'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Lang } from '../context/lang.context'
import { motion } from 'framer-motion'
import useAuth from '../hooks/useAuth'
import LoginModal from './LoginModal'

const Admin = () => {
  const { menu, fetchFood } = useContext(Recipes)
  const { lang } = useContext(Lang)
  const [parent] = useAutoAnimate({ duration: 400 })
  const { isLogedIn, logAdmin, verify, exit, error } = useAuth()

  useEffect(() => {
    verify()
  }, [])

  useEffect(() => {
    if (isLogedIn) {
      fetchFood()
    }
  }, [fetchFood, isLogedIn, error])

  if (!menu.es || !menu.cat) return <LoginModal login={logAdmin} error={error} />
  return (
    <>
      <motion.div
        style={{ width: '100%' }}
        initial={{ y: window.innerHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: window.innerHeight, opacity: 0 }}
      >
        <Header />
        <Wrapper ref={parent}>
          <div style={{ display: 'flex' }}>
            <button onClick={exit}>SALIR</button>
          </div>
          {menu[lang].categories.map((item, i) => (
            <Group
              index={i}
              category={item}
              recipes={menu[lang].recipes.filter(recipe => recipe.category === item)}
              key={i}
            />
          ))}
        </Wrapper>
      </motion.div>
    </>
  )
}

export default Admin

const Wrapper = styled.div`
  width: 60%;
  padding: 35px 3% 50px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  box-shadow: 0px 0px 50px 20px black;
  border-radius: 38px 38px 38px 38px / 80px 80px 80px 80px;
  position: relative;
  background-image: url(/images/paper-texture.jpeg);
  background-repeat: repeat-y;
  background-size: contain cover;
`
