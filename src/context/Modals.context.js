import { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isVisible: false,
    component: null
  })

  document.getElementById('body').style.overflow = modal.isVisible ? 'hidden' : 'auto'

  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>
}

export default ModalProvider
