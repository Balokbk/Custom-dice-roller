import { createGlobalStyle, styled } from 'styled-components'

// Collor pallette:
// #24292e
// #2b3137
// #fafbfc

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Markin-LT';
        src: url('/fonts/Markin-LT-Ultra-Bold.ttf') format('truetype');
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
        height: 100vh;
    }
`

export const AppContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DicesContainer = styled.div`
    margin-top: 150px;
`

export const ButtonCotainer = styled.div`
    position: fixed;
    bottom: 10px;
    width: 100%;
    text-align: center;
`