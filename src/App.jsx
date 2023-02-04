import { Outlet } from 'react-router-dom'
import { ModalContext } from './context/Modals.context'
import { useContext } from 'react'
import Header from './components/Header'

const App = () => {
  const { modal } = useContext(ModalContext)
  return (
    <>
      {modal.isVisible && modal.component}
      <Header />
      <Outlet />
    </>
  )
}

export default App
