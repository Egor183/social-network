import React, { useState } from "react";
import userAvatar from "../../assets/images/defaultuserWhite.png";
import arrow from "../../assets/images/pngegg.png";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  const [visibility, setVisibility] = useState(false);

  const changeVisibility = (visibility) => {
    visibility ? setVisibility(false) : setVisibility(true);
  };

  return (
    <header className={s.header}>
      <img className={s.userPhoto} alt="user" src={props.isAuth ? props.photo : userAvatar} />
      <div className={s.loginBlock}>
        {props.isAuth ? <div>{props.login}</div> : <NavLink to="/login">Login</NavLink>}
        {props.isAuth ? (
          <img onClick={() => changeVisibility(visibility)} className={s.arrow} src={arrow} alt="arrow" />
        ) : null}
      </div>
      {visibility && props.isAuth && (
        <div className={s.menu} onMouseLeave={() => changeVisibility(visibility)}>
          <NavLink onClick={() => props.setEditMode(true)} to={`/profile/${props.meId}`} className={s.menuPoint}>
            Edit mode
          </NavLink>
          <button
            className={s.menuPoint}
            onClick={() => {
              props.logout();
              changeVisibility(visibility);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
