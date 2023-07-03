import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.h2`
  line-height: 1.2;
  margin: 0 0 ${pxToRem(18)} 0;
  font-weight: 600;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: ${pxToRem(48.83)};
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: ${pxToRem(39.06)};
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: ${pxToRem(31.25)};
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: ${pxToRem(25)};
    `}

  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: ${pxToRem(20)};
    `}
`
