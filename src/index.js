import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './assets/styles/GlobalStyles'
import AuthProvider from './context/Auth.context'
import LangProvider from './context/Lang.context'
import ModalProvider from './context/Modals.context'
import Router from './Router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <LangProvider>
    <ModalProvider>
      <AuthProvider>
        <GlobalStyles />
        <Router />
      </AuthProvider>
    </ModalProvider>
  </LangProvider>
)
