import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const Container = styled.section`
  padding: ${pxToRem(42)} 0;

  ${queryLg(css`
    padding: ${pxToRem(84)} 0;
  `)}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: ${pxToRem(60)};
  grid-gap: ${pxToRem(10)};
`
