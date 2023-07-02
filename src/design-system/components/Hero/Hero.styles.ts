import queryLg from "../../utils/queryLg"
import pxToRem from "../../utils/pxToRem"
import styled, { css } from "styled-components"

export const Container = styled.article``

export const ContentBox = styled.div<{ $isReversed?: boolean }>`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(22)};
  padding: ${pxToRem(32)} 0;

  & img {
    max-width: ${pxToRem(200)};
  }

  ${queryLg(css`
    flex-direction: row;
    align-items: start;
    justify-content: start;
    gap: ${pxToRem(80)};

    & img {
      max-width: ${pxToRem(300)};
    }
  `)}

  ${(props) =>
    props.$isReversed &&
    css`
      flex-direction: column;

      ${queryLg(css`
        flex-direction: row-reverse;
      `)}
    `}
`

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(22)};

  & * {
    margin: 0;
    text-align: center;
  }

  & h1 {
    line-height: 1.2;
    margin: 0;
  }

  & p {
    color: ${(props) => props.theme.hero.color};
    font-weight: 500;
    transform: translateY(-4px);
  }

  ${queryLg(css`
    align-items: start;
    justify-content: start;
    gap: ${pxToRem(32)};

    & * {
      text-align: left;
    }

    & h1 {
      line-height: 1;
    }
  `)}
`
