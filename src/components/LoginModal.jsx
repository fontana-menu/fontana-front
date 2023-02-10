import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { Auth } from '../context/Auth.context'
import useAuth from '../hooks/useAuth'

const LoginModal = () => {
  const { isLoggedIn } = useContext(Auth)
  const { logAdmin, error } = useAuth()
  const admin = useRef()
  const pass = useRef()

  console.log('Login state: ', isLoggedIn)

  const handleSubmit = e => {
    e.preventDefault()
    logAdmin({ name: admin.current.value, password: pass.current.value })
  }

  return (
    <Wrapper>
      <h3 style={{ marginBottom: '1em', textAlign: 'center' }}>Bienvenidos!</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error.message}</p>}
      <Form onSubmit={e => handleSubmit(e)}>
        <Input ref={admin} type='text' required></Input>
        <Input ref={pass} type='password' required></Input>
        <button>Entrar</button>
      </Form>
    </Wrapper>
  )
}

export default LoginModal

const Wrapper = styled.div`
  background-color: white;
  min-width: 5%;
  min-height: 5%;
  padding: 1em;
  border-radius: 15px;
  margin-top: 3em;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  margin-top: 0.5em;
`
const Input = styled.input``
