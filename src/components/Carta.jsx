import styled from 'styled-components'

const Carta = ({ children }) => <Wrapper>{children}</Wrapper>
export default Carta

const Wrapper = styled.div`
  width: 60%;
  padding: 35px 3% 50px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  box-shadow: 0px 0px 50px 20px black;
  border-radius: 38px 38px 38px 38px / 80px 80px 80px 80px;
  position: relative;
  background-image: url(/images/paper-texture.jpeg);
  background-repeat: repeat-y;
  background-size: contain cover;
`
