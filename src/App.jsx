import { Routes, Route } from 'react-router-dom'
import Carta from './components/Carta'
import Home from './components/Home'
import RecipesProvider from './context/Food.context'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/carta'
        element={
          <RecipesProvider>
            <Carta />
          </RecipesProvider>
        }
      />
    </Routes>
  )
}

export default App
