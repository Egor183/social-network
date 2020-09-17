import React from "react";
import s from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  return (
    <NavLink to="/friend">
      <div className={s.fotoUser}></div>
      {props.name}
    </NavLink>
  );
};

export default Friend;
