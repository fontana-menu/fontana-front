import { Routes, Route, useLocation } from 'react-router-dom'
import Carta from './components/Carta'
import Home from './components/Home'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/carta' element={<Carta />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
