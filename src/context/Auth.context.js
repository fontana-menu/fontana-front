import { createContext, useEffect, useState } from 'react'
import { checkUser } from '../api/gets'
import { getApp } from '../utils/helpers'

export const Auth = createContext()

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getApp() === 'admin') {
      checkUser().then(res => {
        setIsLoggedIn(res.status)
      })
    }
  }, [])

  return <Auth.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</Auth.Provider>
}

export default AuthProvider
