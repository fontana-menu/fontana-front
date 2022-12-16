import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Recipes } from '../context/Food.context'
import { createRecipe } from '../api/posts'

const RecipesModal = ({ index, onClose }) => {
  const { menu } = useContext(Recipes)
  const navigate = useNavigate()
  const name_es = useRef()
  const description_es = useRef()
  const name_cat = useRef()
  const description_cat = useRef()
  const price = useRef()

  const handleNewRecipe = async event => {
    event.preventDefault()
    const newRecipe = {
      es: {
        name: name_es.current.value,
        description: description_es.current.value,
        price: price.current.value,
        category: menu.es.categories[index],
      },
      cat: {
        name: name_cat.current.value,
        description: description_cat.current.value,
        price: price.current.value,
        category: menu.cat.categories[index],
      },
    }
    try {
      const res = await createRecipe(newRecipe)
      onClose({ isVisible: false, component: null })
      alert(res.data.message)
      navigate('/admin')
    } catch (error) {
      console.log('There has been an error: ', error)
    }
  }
  return (
    <>
      <BackDrop onClick={() => onClose({ isVisible: false, component: null })}></BackDrop>
      <Wrapper>
        <Form onSubmit={e => handleNewRecipe(e)}>
          <h4>Precio</h4>
          <input ref={price} style={{ textAlign: 'center' }} type='number' min={0} required step={1} />
          <p>(Para que marque "S/M" pon el precio a 0.01)</p>
          <h4>Nombre</h4>
          <Label>
            Español: <input ref={name_es} type='text' required />
          </Label>
          <Label>
            Catalán: <input ref={name_cat} type='text' required />
          </Label>
          <h4>Descripción/Ingredientes (opcional)</h4>
          <Label>
            Español: <textarea ref={description_es} rows={5} cols={40} />
          </Label>
          <Label>
            Catalán: <textarea ref={description_cat} rows={5} cols={40} />
          </Label>
          <button>Crear Receta</button>
          <button
            onClick={e => {
              e.preventDefault()
              onClose({ isVisible: false, component: null })
            }}
          >
            Salir
          </button>
        </Form>
      </Wrapper>
    </>
  )
}

export default RecipesModal

const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000095;
`
const Wrapper = styled.div`
  position: fixed;
  margin: 50px 30%;
  padding: 30px 50px;
  background-color: white;
  border-radius: 50px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
`
const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`
