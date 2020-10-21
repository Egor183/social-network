import styled from "styled-components";

export const SummaryErrorStyled = styled.div`
  border: 1px solid red;
  padding: 10px;
  color: darkred;
  width: 140px;
`;

export const ColumnBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  &.blockUser {
    align-items: center;
    width: 150px;
    margin-bottom: 40px;
  }

  &.LoginForm {
    margin-left: 100px;
  }

  h1 {
    color: #7f7f7f;
    margin-bottom: 20px;
  }
`;
