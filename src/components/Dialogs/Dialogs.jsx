import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((elem) => <DialogItem name={elem.name} key={elem.id} id={elem.id} src={elem.image} />);

  let messagesElements = props.messages.map((elem) => <Message message={elem.message} key={elem.id} />);

  let messageData = React.createRef();

  let newMessage = () => {
    let text = messageData.current.value;
    props.updateNewMessageTextActionCreator(text);
  };

  let addNewMessage = () => {
    props.addMessageActionCreator();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          {" "}
          <textarea onChange={newMessage} ref={messageData} value={props.newMessageText}></textarea>
        </div>
        <div>
          <button onClick={addNewMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
