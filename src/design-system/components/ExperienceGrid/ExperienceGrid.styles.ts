import styled from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.section``

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
`
