import { Routes, Route } from 'react-router-dom'
import Carta from './components/Carta'

const App = () => {
  return (
    <Routes>
      <Route path='/carta' element={<Carta />} />
    </Routes>
  )
}

export default App
