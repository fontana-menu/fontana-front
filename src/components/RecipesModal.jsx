import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { createRecipe, editRecipe } from '../api/posts'
import { getRecipe } from '../api/gets'

const RecipesModal = ({ index, onClose, categories, id = undefined }) => {
  const [recipe, setRecipe] = useState(null)
  const navigate = useNavigate()
  const name_es = useRef()
  const description_es = useRef()
  const name_cat = useRef()
  const description_cat = useRef()
  const price = useRef()

  const handleNewRecipe = async event => {
    event.preventDefault()
    const recipe = {
      name: [name_es.current.value, name_cat.current.value],
      description: [description_es.current.value, description_cat.current.value],
      price: price.current.value,
      category: [categories.es[index], categories.cat[index]]
    }
    try {
      const res = id ? await editRecipe(id, recipe) : await createRecipe(recipe)
      onClose({ isVisible: false, component: null })
      alert(res.data.message)
      navigate('/carta')
    } catch (error) {
      console.log('There has been an error: ', error)
    }
  }

  const fetchRecipe = useCallback(async id => {
    try {
      const res = await getRecipe(id)
      setRecipe(res.data)
    } catch (error) {
      console.log('Error fetching recipe: ', error)
    }
  }, [])

  useEffect(() => {
    if (id) {
      fetchRecipe(id)
    }
  }, [fetchRecipe, id])

  useEffect(() => {
    if (recipe) {
      price.current.value = recipe.price
      name_es.current.value = recipe.name[0]
      name_cat.current.value = recipe.name[1]
      description_es.current.value = recipe.description[0]
      description_cat.current.value = recipe.description[1]
    }
  }, [recipe])

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
          <button>{id ? 'Guardar' : 'Crear Receta'}</button>
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
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`
const Wrapper = styled.div`
  position: fixed;
  margin: 50px 30%;
  padding: 30px 50px;
  background-color: white;
  border-radius: 50px;
  z-index: 2;
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
