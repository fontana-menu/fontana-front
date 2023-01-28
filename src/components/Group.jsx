import { useContext, useState } from 'react'
import styled from 'styled-components'
import { FaChevronCircleDown } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { ModalContext } from '../context/Modals.context'
import { createPortal } from 'react-dom'
import RecipesModal from './RecipesModal'
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { deleteRecipe } from '../api/posts'

const Group = ({ category, recipes, index, info = null }) => {
  const { setModal } = useContext(ModalContext)
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const navigate = useNavigate()

  const handleDelete = async (id, name) => {
    // eslint-disable-next-line no-restricted-globals
    const conf = confirm(`Seguro que quieres eliminar la receta: ${name}?`)
    if (!conf) return
    const res = await deleteRecipe(id)
    alert(res.data.message)
    navigate(0)
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
        {location.pathname === '/admin' && (
          <button
            onClick={() =>
              setModal({
                isVisible: true,
                component: createPortal(
                  <RecipesModal index={index} onClose={setModal} />,
                  document.getElementById('modals')
                )
              })
            }
          >
            Nueva Receta
          </button>
        )}
      </Title>
      {isVisible &&
        recipes.map((item, i, r) => (
          <>
            <Recipe isVisible={isVisible} key={item.id}>
              <Name>
                {location.pathname === '/admin' ? (
                  <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                    <RecipeName>{item.name}</RecipeName>
                    <DeleteIcon size={30} onClick={() => handleDelete(item.id, item.name)} />
                    <EditIcon
                      size={30}
                      onClick={() =>
                        setModal({
                          isVisible: true,
                          component: createPortal(
                            <RecipesModal index={index} onClose={setModal} id={item.id} />,
                            document.getElementById('modals')
                          )
                        })
                      }
                    />
                  </div>
                ) : (
                  <RecipeName>{item.name}</RecipeName>
                )}
                <span>
                  {item.price === 0.01
                    ? 'S/M'
                    : new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(item.price)}
                </span>
              </Name>
              {item.description && <p>{item.description}</p>}
            </Recipe>
            {index === 7 && i === r.length - 1 && info}
          </>
        ))}
    </>
  )
}

export default Group

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
