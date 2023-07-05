import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const Container = styled.section`
  padding: ${pxToRem(32)} 0;

  & h2 {
    margin-bottom: ${pxToRem(16)};
  }

  & > p:first-of-type {
    margin-bottom: ${pxToRem(32)};
    font-weight: 500;
  }
`

export const Grid = styled.div`
  display: grid;

  ${queryLg(css`
    grid-template-columns: repeat(3, 1fr);
  `)}
`
