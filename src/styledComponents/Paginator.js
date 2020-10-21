import styled from "styled-components";

export const PageStyled = styled.span`
  font-weight: ${(props) => (props.p === props.currentPage ? "bold" : "normal")};
  margin: 0 5px;
  cursor: pointer;
`;
