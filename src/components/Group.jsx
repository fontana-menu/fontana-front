import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaChevronCircleDown } from 'react-icons/fa'

const Group = ({ category, recipes }) => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <>
      <Title>
        <H2 onClick={() => setIsVisible(!isVisible)}>{category}</H2>
        <Arrow unfolded={isVisible} />
      </Title>
      {isVisible &&
        recipes.map(item => (
          <Recipe isVisible={isVisible} key={item._id}>
            <Name>
              <h3>{item.name}</h3>
              <span>
                {item.price === 0.01
                  ? 'S/M'
                  : new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(item.price)}
              </span>
            </Name>
            {item.description && <p>{item.description}</p>}
          </Recipe>
        ))}
    </>
  )
}

export default Group

const Title = styled.div`
  display: flex;
  column-gap: 1em;
  align-items: center;
`
const H2 = styled.h2`
  padding: 20px 0;
  display: inline-block;
  text-decoration: underline;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`
const Arrow = styled(FaChevronCircleDown)`
  transform: ${({ unfolded }) => (unfolded ? 'rotate(0)' : 'rotate(-90deg)')};
  transition: all 0.5s ease;
`
const unfold = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const Recipe = styled.div`
  animation: ${unfold} 2s;
  > p {
    padding-left: 5%;
    max-width: 65%;
  }
`
const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h3 {
    text-transform: uppercase;
  }
`
