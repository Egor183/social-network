import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validator";

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Send message"
          name="message"
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const TextAreaReduxForm = reduxForm({
  form: "addMessage",
})(AddMessageForm);

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((elem) => (
    <DialogItem name={elem.name} key={elem.id} id={elem.id} src={elem.image} />
  ));

  let messagesElements = props.messages.map((elem) => (
    <Message message={elem.message} key={elem.id} />
  ));

  const onSubmit = (formData) => {
    props.addMessageActionCreator(formData);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <TextAreaReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;
