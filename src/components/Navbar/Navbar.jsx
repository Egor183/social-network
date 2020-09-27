import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to={"/profile/" + this.props.meId} activeClassName={s.active}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            {" "}
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>
            {" "}
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" activeClassName={s.active}>
            {" "}
            Users
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>
            {" "}
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>
            Settings
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/friends" activeClassName={s.active}>
            Friends
          </NavLink>
        </div>
      </nav>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    meId: state.auth.userId,
    isAuth: state.auth.isAuth,
    userId: state.profilePage.userId,
  };
};

export default compose(connect(mapStateToProps, {}))(Navbar);
