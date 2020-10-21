import styled from "styled-components";

export const DialogsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const DialogsUserStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
  a {
    color: black;
    text-decoration: none;
    font-weight: normal;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const FlexContainerStyled = styled.div`
  display: flex;
  justify-content: ${(props) => `${props.justify}`};
  align-items: ${(props) => `${props.align}`};
  & button {
    cursor: pointer;
  }
  margin-bottom: 20px;
`;
