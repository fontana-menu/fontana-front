import { forwardRef } from 'react'
import styled from 'styled-components'

const Carta = forwardRef(({ children }, ref) => <Wrapper ref={ref}>{children}</Wrapper>)
export default Carta

const Wrapper = styled.div`
  width: 100%;
  padding: 35px 3% 50px;
  margin: 90px 3% 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  box-shadow: 0px 0px 25px 10px black;
  border-radius: 19px 19px 19px 19px / 40px 40px 40px 40px;
  position: relative;
  background-image: url(/images/paper-texture.jpeg);
  background-repeat: repeat-y;
  background-size: contain cover;
  z-index: 3;

  @media (min-width: 600px) {
    border-radius: 38px 38px 38px 38px / 80px 80px 80px 80px;
    box-shadow: 0px 0px 50px 20px black;
    z-index: 1;
    width: 60%;
    margin: 40px 0;
  }
`
