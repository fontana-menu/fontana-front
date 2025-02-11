import { createGlobalStyle } from 'styled-components';
import CenturyGothic from '../fonts/century-gothic/CenturyGothic.ttf';
import CenturyGothicBold from '../fonts/century-gothic/gothicb.ttf';
import CenturyGothicItalic from '../fonts/century-gothic/gothici.ttf';
import DeliciousHandrawn from '../fonts/DeliciousHandrawn-Regular.ttf';

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
        font-family: DeliciousHandrawn;
        src: local(DeliciousHandrawn), url(${DeliciousHandrawn});
        font-style: normal;
        font-weight: normal;
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
        font-size: .75rem;
        line-height: 1rem;
        height: 100vh;

        @media (min-width: 600px) {
            font-size: 1rem;
            line-height: 1.25rem;
        }
    }
    #modals {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    #root {
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    span, a, p, h1, h2, h3, h4, h5, h6 {
        line-height: 1.5;
    }
    button {
        align-self: center;
        padding: 5px 8px;
        :hover {
            cursor: pointer;
        }
    }
    input, textarea {
        padding: 5px 8px;
        resize: none;
    }
    a {
        text-decoration: none;
        color: #000000;
        font-weight: bold;
        font-size: 1.3em;
        :hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
    footer > :is(span, a) {
        font-size: 0.8rem;
        font-weight: normal;
        color: #ffffff;
    }
`;
