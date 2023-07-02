import styled from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.p`
  margin: 0 0 ${pxToRem(28)} 0;
  line-height: 1.75;

  &:last-of-type {
    margin-bottom: 0;
  }
`
