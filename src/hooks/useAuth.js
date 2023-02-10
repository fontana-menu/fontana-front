import { useState, useContext } from 'react'
import { checkUser, logOut } from '../api/gets'
import { login } from '../api/posts'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../context/Auth.context'

const useAuth = () => {
  const { setIsLoggedIn } = useContext(Auth)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const verify = async () => {
    const res = await checkUser()
    if (res.data.status === false) return setError(res.data)
    setIsLoggedIn(res.data.status)
  }

  const logAdmin = async data => {
    try {
      if (error !== null) setError(null)
      const res = await login(data)
      setIsLoggedIn(res.data.status)
      navigate('/carta')
    } catch (error) {
      setError(error.response.data)
    }
  }

  const exit = () => {
    logOut()
    setIsLoggedIn(false)
    // navigate('/')
  }

  return { logAdmin, verify, exit, error }
}
export default useAuth
