import { createContext, useLayoutEffect, useState } from 'react'
import { checkUser } from '../api/gets'

export const Auth = createContext()

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState()

  useLayoutEffect(() => {
    checkUser().then(res => {
      setIsLoggedIn(res.data.status)
    })
  }, [])

  return <Auth.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</Auth.Provider>
}

export default AuthProvider
