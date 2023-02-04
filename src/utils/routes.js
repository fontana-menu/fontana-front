import { createBrowserRouter } from 'react-router-dom'
import { getFood } from '../api/gets'
import App from '../App'
import Food from '../components/Food'
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
      }
    ]
  }
])
