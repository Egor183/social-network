import styled from "styled-components";
import { Field } from "redux-form";

export const PostsContainerStyled = styled.div`
  padding: 10px;
  h3 {
    font-weight: bold;
    color: #7f7f7f;
  }
`;

export const AllPosts = styled.div`
  margin-top: 10px;
`;

export const TextAreaStyled = styled(Field)`
  border: 2px solid #d2d0d0;
  border-radius: 5px;
  outline: none;
  width: 100%;
  margin-top: 20px;
  height: 100px;
  padding: 15px;
  resize: none;
  box-sizing: border-box;
`;

export const InputEditProfileStyled = styled(TextAreaStyled).attrs((props) => {
  return { width: props.width || 150 };
})`
  width: ${(props) => `${props.width}px`};
  margin-top: 0px;
  height: 20px;
  padding: 0px;
  padding-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const TextAreaEditProfileStyled = styled(TextAreaStyled)`
  border: 2px solid #d2d0d0;
  border-radius: 5px;
  outline: none;
  width: 300px;
  margin-top: 0px;
  height: 50px;
  padding: 0px;
`;

export const PostStyled = styled.div`
  margin-top: 30px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }
  & {
    display: flex;
    align-items: center;
  }
`;
