import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './assets/styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import LangProvider from './context/lang.context'
import RecipesProvider from './context/Food.context'
import ModalProvider from './context/Modals.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <LangProvider>
      <RecipesProvider>
        <ModalProvider>
          <GlobalStyles />
          <App />
        </ModalProvider>
      </RecipesProvider>
    </LangProvider>
  </BrowserRouter>
)
