import styled from "styled-components";

export const TableRow = styled.tr`
  &.light {
    border-bottom: 1px solid #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3),
      0 2px 2px rgba(255,255,255, 0.4);
    background-color: rgba(255, 255, 255, 0.9);
    transition: 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }
  }

  &.custom {
    border-bottom: 1px solid ${(props) => props.color};
    box-shadow: 0 0 2px ${(props) => props.invertShadowColor},
      0 2px 2px ${(props) => props.shadowColor};
    background-color: ${(props) => props.backgroundColor};
    transition: 0.5s;

    &:hover {
      background-color: ${(props) => props.hoverColor};
    }
  }

  
`;
