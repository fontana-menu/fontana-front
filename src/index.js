import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './assets/styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import RecipesProvider from './context/Food.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <RecipesProvider>
      <GlobalStyles />
      <App />
    </RecipesProvider>
  </BrowserRouter>
)
