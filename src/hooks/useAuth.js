import { useState } from 'react'
import { logOut } from '../api/gets'
import { login } from '../api/posts'
import { useCookies } from 'react-cookie'

const useAuth = () => {
  const [isLogedIn, setIsLogedIn] = useState(false)
  const [error, setError] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['access_token'])

  /* const verify = async () => {
    const res = await checkUser()
    if (res.data.status === false) return setError(res.data)
    setIsLogedIn(res.data.status)
  } */

  const logAdmin = async data => {
    try {
      if (error !== null) setError(null)
      const res = await login(data)
      //   if (res.data.status === false) return setError(res.data)
      setIsLogedIn(res.data.status)
    } catch (error) {
      setError(error.response.data)
    }
  }

  const exit = () => {
    removeCookie('access_token', { path: '/' })
    setIsLogedIn(false)
    logOut()
  }

  return { isLogedIn, logAdmin, exit, error }
}
export default useAuth
