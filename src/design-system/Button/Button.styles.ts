import styled from "styled-components"
import { ButtonProps } from "./Button"

export const Container = styled.button<{
  $variant?: ButtonProps["variant"]
  $size?: ButtonProps["size"]
}>`
  background: transparent;
  outline: none;
  border: 0;
  padding: 0;
  display: flex;
  font-size: 1rem;
  cursor: pointer;
`
