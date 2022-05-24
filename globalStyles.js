// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }

    html, body {
        font-family: "Open Sans", sans-serif;
        
    }

    h1 {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 1rem 0;
    }

    h2 {
        font-size: 1.4rem;
        font-weight: 400;
        margin: 1rem 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    li {
        list-style-type: none;
    }

`;

export default GlobalStyle;
