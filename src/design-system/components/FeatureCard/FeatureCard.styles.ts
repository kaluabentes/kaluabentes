import styled from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(12)};
  text-align: center;

  & * {
    margin: 0;
  }
`

export const Icon = styled.div`
  font-size: ${pxToRem(52)};
  line-height: 1;
  color: ${(props) => props.theme.button.primary.background};
`
