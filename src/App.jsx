import { Routes, Route, useLocation } from 'react-router-dom'
import Carta from './components/Carta'
import Home from './components/Home'
import { AnimatePresence } from 'framer-motion'
import Admin from './components/Admin'
import { ModalContext } from './context/Modals.context'
import { useContext } from 'react'

const App = () => {
  const { modal } = useContext(ModalContext)
  const location = useLocation()
  return (
    <>
      {modal.isVisible && modal.component}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/carta' element={<Carta />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
