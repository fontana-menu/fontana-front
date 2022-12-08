import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './assets/styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import RecipesProvider from './context/Food.context'
import LangProvider from './context/lang.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <LangProvider>
        <RecipesProvider>
          <GlobalStyles />
          <App />
        </RecipesProvider>
      </LangProvider>
    </BrowserRouter>
  </StrictMode>
)
