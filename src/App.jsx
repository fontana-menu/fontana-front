import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import { AnimatePresence } from 'framer-motion'
import Admin from './components/Admin'
import { ModalContext } from './context/Modals.context'
import { useContext } from 'react'
import Header from './components/Header'
import Food from './components/Food'

const App = () => {
  const { modal } = useContext(ModalContext)
  const location = useLocation()
  return (
    <>
      {modal.isVisible && modal.component}
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/carta' element={<Food />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
