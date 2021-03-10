import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  &.jce {
    justify-content: flex-end;
  }
  &.jcc {
    justify-content: center;
  }
  &.jcb {
    justify-content: space-between;
  }
  &.jca {
    justify-content: space-around;
  }
`