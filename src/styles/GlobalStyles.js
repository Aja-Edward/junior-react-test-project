import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html,
    body, * {
        padding: 0;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        font-family: 'Raleway', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        box-sizing: border-box;
    }
`