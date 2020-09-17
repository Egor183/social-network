import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import ImageUser from "./FotoUser/FotoUser";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialog + " " + s.active}>
      <ImageUser src={props.src} />
      <NavLink className={s.dialogLink} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
