import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import ImageUser from "./FotoUser/FotoUser";
import { DialogsUserStyled } from "../../../styledComponents/Dialogs";

const DialogItem = ({ id, src, name }) => {
  let path = `/dialogs/${id}`;
  return (
    <DialogsUserStyled>
      <ImageUser src={src} />
      <NavLink className={s.dialogLink} to={path}>
        {name}
      </NavLink>
    </DialogsUserStyled>
  );
};

export default DialogItem;
