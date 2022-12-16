import { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isVisible: false,
    component: null,
  })

  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>
}

export default ModalProvider
