import { Routes, Route } from 'react-router-dom'
import Carta from './components/Carta'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/carta' element={<Carta />} />
    </Routes>
  )
}

export default App
