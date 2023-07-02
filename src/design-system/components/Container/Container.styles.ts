import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"
import { ContainerProps } from "./Container"

export const BaseContainer = styled.div<{ $size?: ContainerProps["size"] }>`
  margin: 0 auto;
  padding: 0 ${pxToRem(16)};
  width: 100%;

  ${(props) =>
    props.$size === "sm" &&
    css`
      max-width: ${pxToRem(640)};
    `}

  ${(props) =>
    props.$size === "md" &&
    css`
      max-width: ${pxToRem(768)};
    `}

  ${(props) =>
    props.$size === "lg" &&
    css`
      max-width: ${pxToRem(1024)};
    `}

  ${(props) =>
    props.$size === "xl" &&
    css`
      max-width: ${pxToRem(1280)};
    `}
`
