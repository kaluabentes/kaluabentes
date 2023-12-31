import styled, { css } from "styled-components"

import queryLg from "@/utils/queryLg"

export const Main = styled.main`
  margin-top: 60px;

  ${queryLg(css`
    padding-top: 42px;
  `)}
`
