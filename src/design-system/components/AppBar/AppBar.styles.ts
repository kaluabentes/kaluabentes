import styled from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${pxToRem(42)};

  & button:nth-child(2) {
    font-size: ${pxToRem(42)};
    color: ${(props) => props.theme.button.primary.background};
    padding: 0;
  }
`
