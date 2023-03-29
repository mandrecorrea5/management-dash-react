import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    }

    body {
        background: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.GRAY_ULTRA_DARK};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        ${({ theme }) => css`
            font: 400 1rem Roboto, sans-serif;            
        `};
    }

`;