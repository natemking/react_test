import { createGlobalStyle, injectGlobal } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html, body{
        margin: 0;
        padding: 0;
    }

    body {
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
        color: #403E45;
    }
`;

