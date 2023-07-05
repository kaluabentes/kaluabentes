import styled from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.section`
  padding: ${pxToRem(80)} 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: ${pxToRem(60)};
  grid-gap: ${pxToRem(10)};
`
