import styled from "styled-components";
import { breakpoints } from "../../configs/cssConfig";

export const Container = styled.div`
  margin: auto;
  width: 1320px;
  @media (max-width: ${breakpoints.extraLarge}px) {
    width: 1140px;
  }
  @media (max-width: ${breakpoints.large}px) {
    width: 960px;
  }
  @media (max-width: ${breakpoints.medium}px) {
    width: 720px;
  }
  @media (max-width: ${breakpoints.small}px) {
    width: 540px;
  }
  @media (max-width: ${breakpoints.extraSmall}px) {
    width: 100%;
  }
`;
