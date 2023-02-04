import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './assets/styles/GlobalStyles'
import LangProvider from './context/Lang.context'
import ModalProvider from './context/Modals.context'
import { RouterProvider } from 'react-router-dom'
import routes from './utils/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <LangProvider>
    <ModalProvider>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ModalProvider>
  </LangProvider>
)
