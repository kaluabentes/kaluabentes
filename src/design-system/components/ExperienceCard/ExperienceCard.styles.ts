import styled, { css } from "styled-components"

import Paragraph from "../Paragraph"
import Heading from "../Heading"
import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const Container = styled.article`
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(12)};
  transition: 0.3s ease-in;

  &:hover {
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.1);
  }

  & * {
    margin: 0;
  }

  & h3,
  h4,
  p {
    font-size: ${pxToRem(16)};
    line-height: 1.75;
  }

  & h4 {
    margin-bottom: ${pxToRem(10)};
  }

  ${queryLg(css`
    display: flex;
  `)}
`

export const Details = styled.div`
  margin-bottom: ${pxToRem(16)};

  ${queryLg(css`
    width: 100%;
    max-width: ${pxToRem(200)};
  `)}
`

export const Content = styled.div``

export const Period = styled(Paragraph)`
  font-weight: 500;
`

export const Company = styled(Paragraph)``

export const City = styled(Paragraph)``

export const Role = styled(Heading)`
  font-weight: 600;

  ${queryLg(css`
    margin-bottom: 0;
  `)}
`

export const Description = styled(Paragraph)`
  margin-bottom: ${pxToRem(16)} !important;
`

export const TechBox = styled.div``
