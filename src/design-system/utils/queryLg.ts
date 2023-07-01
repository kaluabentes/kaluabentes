import { RuleSet, css } from "styled-components"

const queryLg = (cssString: RuleSet<object>) => css`
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    ${cssString}
  }
`

export default queryLg
