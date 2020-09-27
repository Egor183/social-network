import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import ImageUser from "./FotoUser/FotoUser";

const DialogItem = ({ id, src, name }) => {
  let path = `/dialogs/${id}`;
  return (
    <div className={s.dialog + " " + s.active}>
      <ImageUser src={src} />
      <NavLink className={s.dialogLink} to={path}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
