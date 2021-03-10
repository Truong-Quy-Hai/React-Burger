import styled from "styled-components";

export const Button = styled.div`
  filter: brightness(${(props) => (props.disabled ? 60 : 100)}%);
  &.ji {
    cursor: pointer;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    user-select: none;
    &:hover {
      filter: ${props => props.disabled ? "" : "brightness(90%)"};
    }
  }
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;
