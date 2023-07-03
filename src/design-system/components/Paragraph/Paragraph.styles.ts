import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"
import { ParagraphProps } from "./Paragraph"

export const Container = styled.p<{
  $variant?: ParagraphProps["variant"]
  $isBold?: boolean
}>`
  margin: 0 0 ${pxToRem(32)} 0;
  line-height: 1.75;
  font-weight: 500;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${(props) =>
    props.$variant === "default" &&
    css`
      color: inherit;
    `}

  ${(props) =>
    props.$variant === "muted" &&
    css`
      color: ${(props) => props.theme.paragraph.muted.color};
    `}

    ${(props) =>
    props.$isBold &&
    css`
      font-weight: 600;
      font-size: 22px;
    `}
`
