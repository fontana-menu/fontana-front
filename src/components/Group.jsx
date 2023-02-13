import { useContext, useState } from 'react'
import styled from 'styled-components'
import { FaChevronCircleDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../context/Modals.context'
import RecipesModal from './RecipesModal'
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { deleteRecipe } from '../api/posts'
import { motion, AnimatePresence } from 'framer-motion'
import ExtraIngs from './ExtraIngs'

const Group = ({ category, recipes, info }) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <Title>
        <H2 onClick={() => setIsVisible(!isVisible)}>
          {category}
          {category === 'nuestros asados' && <span style={{ textTransform: 'lowercase' }}> (por encargo)</span>}
          {category === 'els nostres rostits' && <span style={{ textTransform: 'lowercase' }}> (per encàrrec)</span>}
        </H2>
        <Arrow onClick={() => setIsVisible(!isVisible)} unfolded={isVisible.toString()} />
      </Title>
      <AnimatePresence initial={false}>
        {isVisible && (
          <Recipes
            initial={{ scaleY: 0, height: 0, opacity: 0 }}
            animate={{ scaleY: 1, height: 'auto', opacity: 1 }}
            exit={{ scaleY: 0, height: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {recipes.map((item, i, r) => (
              <div key={item.id}>
                <Recipe isVisible={isVisible}>
                  <Name>
                    <RecipeName>{item.name}</RecipeName>
                    <span>
                      {item.price === 0.01
                        ? 'S/M'
                        : new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(item.price)}
                    </span>
                  </Name>
                  {item.description && <p>{item.description}</p>}
                </Recipe>
              </div>
            ))}
            {info && <ExtraIngs />}
          </Recipes>
        )}
      </AnimatePresence>
    </>
  )
}

export default Group

export const AdminGroup = ({ category, categoriesLists, recipes, index, info }) => {
  const { setModal } = useContext(ModalContext)
  const [isVisible, setIsVisible] = useState(true)
  const navigate = useNavigate()

  const handleDelete = async (id, name) => {
    // eslint-disable-next-line no-restricted-globals
    const conf = confirm(`Seguro que quieres eliminar la receta: ${name}?`)
    if (!conf) return
    const res = await deleteRecipe(id)
    alert(res.data.message)
    navigate('/carta')
  }
  return (
    <>
      <Title>
        <H2 onClick={() => setIsVisible(!isVisible)}>
          {category}
          {category === 'nuestros asados' && <span style={{ textTransform: 'lowercase' }}> (por encargo)</span>}
          {category === 'els nostres rostits' && <span style={{ textTransform: 'lowercase' }}> (per encàrrec)</span>}
        </H2>
        <Arrow onClick={() => setIsVisible(!isVisible)} unfolded={isVisible.toString()} />
        <button
          onClick={() =>
            setModal({
              isVisible: true,
              component: <RecipesModal index={index} onClose={setModal} categories={categoriesLists} />
            })
          }
        >
          Nueva Receta
        </button>
      </Title>
      <AnimatePresence initial={false}>
        {isVisible && (
          <Recipes
            initial={{ scaleY: 0, height: 0, opacity: 0 }}
            animate={{ scaleY: 1, height: 'auto', opacity: 1 }}
            exit={{ scaleY: 0, height: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {recipes.map((item, i, r) => (
              <div key={item.id}>
                <Recipe isVisible={isVisible}>
                  <Name>
                    <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                      <RecipeName>{item.name}</RecipeName>
                      <DeleteIcon size={30} onClick={() => handleDelete(item.id, item.name)} />
                      <EditIcon
                        size={30}
                        onClick={() =>
                          setModal({
                            isVisible: true,
                            component: (
                              <RecipesModal
                                index={index}
                                onClose={setModal}
                                id={item.id}
                                categories={categoriesLists}
                              />
                            )
                          })
                        }
                      />
                    </div>
                    <span>
                      {item.price === 0.01
                        ? 'S/M'
                        : new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(item.price)}
                    </span>
                  </Name>
                  {item.description && <p>{item.description}</p>}
                </Recipe>
              </div>
            ))}
            {info && <ExtraIngs />}
          </Recipes>
        )}
      </AnimatePresence>
    </>
  )
}

const Title = styled.div`
  display: flex;
  column-gap: 1em;
  align-items: center;
  width: 100%;
`
const H2 = styled.h2`
  padding: 20px 0;
  text-transform: uppercase;
  font-family: ModernLove, serif;
  :hover {
    cursor: pointer;
  }
`
const Arrow = styled(FaChevronCircleDown)`
  transform: ${({ unfolded }) => (unfolded === 'true' ? 'rotate(0)' : 'rotate(-90deg)')};
  transition: all 0.5s ease;
  :hover {
    cursor: pointer;
  }
`
const Recipes = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  transform-origin: top center;
`
const Recipe = styled.div`
  > p {
    padding-left: 5%;
    max-width: 65%;
  }
`
const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`
const RecipeName = styled.h3`
  text-transform: uppercase;
`
const DeleteIcon = styled(MdDeleteForever)`
  fill: #b40000;
  padding: 3px;
  border: 1px solid #b40000;
  border-radius: 5px;
  background-color: #f1a6a6;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: inset 0px 0px 4px 1px black;
  }
`
const EditIcon = styled(MdEdit)`
  padding: 3px;
  border: 1px solid #000000;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: inset 0px 0px 4px 1px black;
  }
`
