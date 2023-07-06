import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const Content = styled.h3<{ $isActive?: boolean }>`
  margin: 0;
  font-weight: 500;
  font-size: ${pxToRem(14)};
  background: ${(props) => props.theme.tooltip.background};
  color: ${(props) => props.theme.tooltip.color};
  display: none;
  position: absolute;
  width: initial;
  top: 0;
  transform: translateY(-28px);
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(4)} ${pxToRem(6)};
  align-items: center;
  text-align: center;
  z-index: 50;

  ${queryLg(css`
    white-space: nowrap;
  `)}

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: ${pxToRem(4)} solid transparent;
    border-right: ${pxToRem(4)} solid transparent;
    border-top: ${pxToRem(4)} solid ${(props) => props.theme.tooltip.background};
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${(props) =>
    props.$isActive &&
    css`
      display: inline-flex;
    `}
`

export const Trigger = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
`
