import styled from "styled-components";

export const ProfileInfoStyled = styled.div`
  padding-bottom: 0;
  display: grid;
  grid-template-columns: auto 1fr;

  .avatarBlock {
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userAvatar {
    width: 200px;
  }

  .userInformation {
    grid-column: 2/3;
    margin-left: 100px;
  }
`;

export const InputFileStyledBlue = styled.div.attrs((props) => {
  return { width: props.width || 120 };
})`
  width: ${(props) => `${props.width}px`};
  background: #7faeca;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 2px;
  border: none;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  margin-top: 15px;
  input {
    width: 100%;
    opacity: 0;
    position: absolute;
  }
`;

export const InputFileStyledGray = styled(InputFileStyledBlue)`
  background: #d2d0d0;
  width: ${(props) => `${props.width}px`};
  color: #83acc2;

  &.noMargin {
    margin-top: 0px;
  }
`;

export const CategoryBoxStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  color: black;

  &.contact {
    padding-left: 20px;
  }
`;

export const CategoryNameStyled = styled.div`
  font-weight: bold;
  color: black;
  margin-right: 10px;
`;

export const FieldContainerStyled = styled.div`
  margin-bottom: 15px;
  &.status {
    display: flex;
    margin-bottom: 20px;
  }

  &.contactsFormsContainer {
    display: flex;
    margin-left: 20px;
  }
`;

export const FormSummaryError = styled.div`
  border: 1px solid red;
  padding: 10px;
  color: darkred;
`;
