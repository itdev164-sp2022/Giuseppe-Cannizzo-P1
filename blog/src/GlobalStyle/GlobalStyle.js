import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
 font-family: sans-serif;
 -ms-text-size-adjust: 100%;
 -webkit-text-size-adjust: 100%
}
body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
article,
aside,
@media only screen and (max-width: 480px) {
    html {
        font-size: 100%;
    }
}
`
export default GlobalStyle