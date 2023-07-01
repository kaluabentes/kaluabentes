import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    color: rgba(0, 0, 0, 0.9);
    font-family: ${(props) => props.theme.typography.fontFamily};
  }
`

export default GlobalStyles
