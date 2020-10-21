import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {  reduxForm } from "redux-form";
import { Textarea } from "../Common/FormsControls/FormsControls";
import { DialogsContainerStyled, FlexContainerStyled } from "../../styledComponents/Dialogs";
import { ColumnBlockStyled } from "../../styledComponents/Login";
import { InputFileStyledBlue } from "../../styledComponents/ProfileInfo";
import { TextAreaStyled } from "../../styledComponents/MyPostsContainer";
import { required } from "../../utils/validators/validator";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div style={{ width: "400px" }}>
        <TextAreaStyled placeholder="Send message" name="message" component={Textarea} validate={[required]} />
        <FlexContainerStyled justify="flex-end">
          <InputFileStyledBlue as="button">Send message</InputFileStyledBlue>
        </FlexContainerStyled>
      </div>
    </form>
  );
};

const TextAreaReduxForm = reduxForm({
  form: "addMessage",
})(AddMessageForm);

const Dialogs = ({ dialogs, messages, addMessageActionCreator }) => {
  let dialogsElement = dialogs.map((elem) => (
    <DialogItem name={elem.name} key={elem.id} id={elem.id} src={elem.image} />
  ));

  let messagesElements = messages.map((elem) => <Message message={elem.message} key={elem.id} />);

  const onSubmit = (formData) => {
    addMessageActionCreator(formData);
  };
  return (
    <DialogsContainerStyled className={s.dialogs}>
      <ColumnBlockStyled>{dialogsElement}</ColumnBlockStyled>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <TextAreaReduxForm onSubmit={onSubmit} />
      </div>
    </DialogsContainerStyled>
  );
};

export default Dialogs;
