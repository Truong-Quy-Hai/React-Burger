import styled from "styled-components";

export const TableColumn = styled.td`
  width: ${(props) => props.width || "100px"};
  padding: 8px;
`;
export const TableHeader = styled.th`
  width: ${(props) => props.width || "100px"};
  text-align: left;
  font-weight: 700;
  color: ${(props) => props.color};
  padding: 8px;
`;
