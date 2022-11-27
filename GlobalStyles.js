import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    #root {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
