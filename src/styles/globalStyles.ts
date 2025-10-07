import { createGlobalStyle, styled } from 'styled-components'

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
        display: flex;
        justify-content: center;
        background: #24292e;
        color: #fafbfc;
        font-family: Markin-LT, sans-serif;
    }
`

export const AppContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`