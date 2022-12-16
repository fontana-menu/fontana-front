import { createGlobalStyle } from 'styled-components'
import CenturyGothic from '../fonts/century-gothic/CenturyGothic.ttf'
import CenturyGothicBold from '../fonts/century-gothic/gothicb.ttf'
import CenturyGothicItalic from '../fonts/century-gothic/gothici.ttf'
import ModernLoveRegular from '../fonts/ModernLoveRegular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'CenturyGothic';
        src: local('CenturyGothic'), url(${CenturyGothic});
        font-weight: normal;
    }
    @font-face {
        font-family: 'CenturyGothic';
        src: local('CenturyGothicBold'), url(${CenturyGothicBold});
        font-weight: 700;
    }
    @font-face {
        font-family: 'CenturyGothic';
        src: local('CenturyGothicItalic'), url(${CenturyGothicItalic});
        font-style: italic;
    }
    @font-face {
        font-family: ModernLove;
        src: local(ModernLove), url(${ModernLoveRegular});
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'CenturyGothic', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        background-image: url(/images/wood-wall-background.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-color: black;
    }
    #root {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    button {
        align-self: center;
        padding: 5px 8px;
    }
    input {
        padding: 5px 8px;
    }
`
