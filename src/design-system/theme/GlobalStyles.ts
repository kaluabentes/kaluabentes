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

  hr {
    border-color: ${(props) => props.theme.separator.borderColor};
    border-width: 1px;
    outline: 0;
    border-top: 0;
    margin: 0;
  }
`

export default GlobalStyles
