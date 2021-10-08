import { createGlobalStyle } from "styled-components";
import background from '../assets/background1.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-image: url(${background});
        background-repeat: no-repeat;
        color: #fff;
        width: 100vw;
        height: 100vh;
        font-family: 'Oswald', sans-serif;
    }

`;