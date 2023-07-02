import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    font-family: ${(props) => props.theme.typography.fontFamily};
    color: ${(props) => props.theme.body.color};
  }
`

export default GlobalStyles
