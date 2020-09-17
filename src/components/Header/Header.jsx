import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.userPhoto}
        alt="user"
        src={props.userPhoto ? props.userPhoto : `https://i.pinimg.com/originals/49/5d/61/495d61514f07f457df6a7fc4ef87b428.png`}
      />
      <div className={s.loginBlock}>{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}</div>
    </header>
  );
};

export default Header;
