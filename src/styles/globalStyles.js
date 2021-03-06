import { createGlobalStyle } from "styled-components"
import Fonts from "./fonts"

const GlobalStyle = createGlobalStyle`
  ${Fonts};
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --red: #8F1D14;
        --red-dark: #9B0505;
        --red-light: #A80000;
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
        grid-template-rows: 4.5rem 1fr 1rem 3rem 4.5rem;
        grid-template-areas:
        "header"
        "main"
        "gap"
        "social"
        "footer";
    }
    
    h1 {
        font-size: var(--fz-heading);
        font-weight: 700;
        letter-spacing: 0;
        line-height: 56px;
    }
    h2 {
        font-size: var(--fz-xxl);
        letter-spacing: 0;
        line-height: 42px;
    }   
    h3 {
        font-size: var(--fz-xl);
        letter-spacing: 0;
        line-height: 33px;
    }    
    h4 {
        font-size: var(--fz-lg);
        letter-spacing: 0;
        line-height: 29px;
    }    
    h5 {
        font-size: var(--fz-md);
        letter-spacing: 0;
        line-height: 24px;
    }    
    h6 {
        font-size: var(--fz-sm);
        letter-spacing: 0;
        line-height: 22px;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0.5rem 0 0.5rem 0;
    }
`

export default GlobalStyle
