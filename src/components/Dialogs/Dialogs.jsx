import React from "react";
import s from "./Dialogs.module.css";
import style from "./../Profile/MyPosts/MyPosts.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Field, reduxForm, reset } from "redux-form";
import { Textarea } from "../Common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";
import { textareaHandler } from "../../utils/textareaHandler";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Write a message..."
          name="message"
          component={Textarea}
          validate={[required]}
          className={style.textarea}
          onKeyDown={(e) => {
            textareaHandler(e, props.handleSubmit);
          }}
        />
      </div>
      <div className={style.buttonWrapper}>
        <button type={"submit"} className={style.commonButton}>
          Add message
        </button>
      </div>
    </form>
  );
};

const TextAreaReduxForm = reduxForm({
  form: "addMessage",
})(AddMessageForm);

const Dialogs = ({ dialogs, messages, addMessageActionCreator, meId }) => {
  let dialogsElement = dialogs.map((elem) => (
    <DialogItem name={elem.name} key={elem.id} id={elem.id} src={elem.image} />
  ));

  let messagesElements = messages.map((elem) => (
    <Message message={elem.message} id={elem.id} key={elem.id} meId={meId} userId={elem.userId} />
  ));

  const onSubmit = (formData, dispatch) => {

    addMessageActionCreator(formData, meId);
    dispatch(reset("addMessage"));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div className={s.messagesContainer}>
          <div className={s.messageBlock}>{messagesElements}</div>
          <TextAreaReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
