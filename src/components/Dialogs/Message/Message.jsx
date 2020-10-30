import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {

  return (
    <div className={props.userId === props.meId ? s.messageMeWrapper : s.messageWrapper}>
      <p className={props.userId === props.meId ? s.meMessage : s.message}>{props.message}</p>
    </div>
  );
};

export default Message;
