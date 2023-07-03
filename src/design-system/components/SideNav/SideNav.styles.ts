import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.nav<{ $isOpen?: boolean }>`
  z-index: 100;
  height: 100vh;
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.1);
  max-width: 260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.sideNav.backgroundColor};
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(-260px);
  transition: 0.3s ease transform;

  ${(props) =>
    props.$isOpen &&
    css`
      transform: translateX(0);
    `}
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.li`
  & a {
    display: block;
    text-decoration: none;
    text-align: left;
    background: transparent;
    border: 0;
    padding: ${pxToRem(16)};
    border-bottom: 1px solid ${(props) => props.theme.sideNav.borderColor};
    font-weight: 600;
    font-size: ${pxToRem(14)};
    cursor: pointer;
    color: inherit;
  }
`

export const Header = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.sideNav.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    height: ${pxToRem(13)};
    padding-left: ${pxToRem(13)};
    padding-right: ${pxToRem(13)};
  }
`

export const Title = styled.h3`
  margin: 0;
  font-weight: 600;
  padding: ${pxToRem(16)};
  text-transform: uppercase;
  font-size: ${pxToRem(12)};
  letter-spacing: 2px;
`
