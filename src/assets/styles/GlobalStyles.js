import { createGlobalStyle } from 'styled-components'
import CenturyGothic from '../fonts/century-gothic/CenturyGothic.ttf'
import CenturyGothicBold from '../fonts/century-gothic/gothicb.ttf'
import CenturyGothicItalic from '../fonts/century-gothic/gothici.ttf'

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
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'CenturyGothic', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    #root {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
