import { createGlobalStyle } from 'styled-components'

// #24292e
// #2b3137
// #fafbfc

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Markin-LT';
        src: url('src/fonts/Markin-LT-Ultra-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: #24292e;
        color: #fafbfc;
        font-family: Markin-LT, sans-serif;
    }

    button {
    cursor: pointer;
   }
`