import { createGlobalStyle } from "styled-components"
import Fonts from "./fonts"

const GlobalStyle = createGlobalStyle`
  ${Fonts};
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --red: #8F1D14;
        --red-dark: #9B0505;
        --red-bg: rgba(155,5,5,0.3);
        --red-border: #B70000;
        --grey: #949494;

        --font-sans: 'Raleway', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

        --fz-sm: 18px;
        --fz-md: 20px;
        --fz-lg: 24px;
        --fz-xl: 28px;
        --fz-xxl: 36px;
        --fz-heading: 48px;
  }

    html {
        box-sizing: border-box;
        width: 100%;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        background-color: var(--white);
        font-family: var(--font-sans);
        font-size: var(--fz-sm);
    }
    
    #root {
        min-height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(12, [col-start] 1fr);
        grid-gap: 20px;
    }
`

export default GlobalStyle
