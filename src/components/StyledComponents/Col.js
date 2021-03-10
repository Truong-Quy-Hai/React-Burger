import styled, { css } from "styled-components";
import { breakpoints, gutter } from "../../configs/cssConfig";

const createCols = () => {
  let styles = "";
  for (let i = 1; i <= 12; i++) {
    styles += `
      .col-${i} {
        padding: ${gutter}px;
        flex: 0 0 ${i / 12 * 100}%;
        width: ${i / 12 * 100}%;
      }
      &.col-sm-${i} {
        @media (min-width: ${breakpoints.extraSmall}px) {
          padding: ${gutter}px;
          flex: 0 0 ${i / 12 * 100}%;
          width: ${i / 12 * 100}%;
        }
      }
      &.col-md-${i} {
        @media (min-width: ${breakpoints.medium}px) {
          padding: ${gutter}px;
          flex: 0 0 ${i / 12 * 100}%;
          width: ${i / 12 * 100}%;
        }
      }
      &.col-lg-${i} {
        @media (min-width: ${breakpoints.large}px) {
          padding: ${gutter}px;
          flex: 0 0 ${i / 12 * 100}%;
          width: ${i / 12 * 100}%;
        }
      }
      &.col-x-lg-${i} {
        @media (min-width: ${breakpoints.extraLarge}px) {
          padding: ${gutter}px;
          flex: 0 0 ${i / 12 * 100}%;
          width: ${i / 12 * 100}%;
        }
      }
    `;
  }
  return css`
    ${styles}
  `;
};

export const Col = styled.div`
  ${createCols()};
`;
