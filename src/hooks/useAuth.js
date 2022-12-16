import { useState } from 'react'
import { checkUser, logOut } from '../api/gets'
import { login } from '../api/posts'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
  const [isLogedIn, setIsLogedIn] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const verify = async () => {
    const res = await checkUser()
    if (res.data.status === false) return setError(res.data)
    setIsLogedIn(res.data.status)
  }

  const logAdmin = async data => {
    try {
      if (error !== null) setError(null)
      const res = await login(data)
      setIsLogedIn(res.data.status)
    } catch (error) {
      setError(error.response.data)
    }
  }

  const exit = () => {
    setIsLogedIn(false)
    logOut()
    navigate('/')
  }

  return { isLogedIn, logAdmin, verify, exit, error }
}
export default useAuth
