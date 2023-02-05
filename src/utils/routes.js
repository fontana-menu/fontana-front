import { createBrowserRouter } from 'react-router-dom'
import { getFood, getPizzas } from '../api/gets'
import App from '../App'
import Food from '../components/Food/Food'
import Pizzas from '../components/Food/Pizzas'
import Home from '../components/Home'

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/carta',
        element: <Food />,
        loader: getFood
      },
      {
        path: '/pedidos',
        element: <Pizzas />,
        loader: getPizzas
      }
    ]
  }
])
