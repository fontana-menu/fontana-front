import styled from 'styled-components'

const Group = ({ category, recipes }) => {
  return (
    <Wrapper>
      <H2>{category}</H2>
      {recipes.map(item => (
        <Recipe key={item._id}>
          <Title>
            <h3>{item.name}</h3>
            <span>
              {item.price === 0.01
                ? 'S/M'
                : new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(item.price)}
            </span>
          </Title>
          {item.description && <p>{item.description}</p>}
        </Recipe>
      ))}
    </Wrapper>
  )
}

export default Group

const Wrapper = styled.div`
  margin: 50px 0;
`
const H2 = styled.h2`
  text-decoration: underline;
  text-transform: uppercase;
  margin-bottom: 30px;
`
const Recipe = styled.div`
  margin-bottom: 15px;
  :last-child {
    margin: 0;
  }
  > p {
    padding-left: 5%;
    max-width: 65%;
  }
`
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h3 {
    text-transform: uppercase;
  }
`
