import pxToRem from "../../utils/pxToRem"
import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(28)};
  padding: ${pxToRem(16)};
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.iconButton.color};

  &:hover {
    color: ${(props) => props.theme.iconButton.colorHover};
  }
`
