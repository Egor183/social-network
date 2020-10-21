import React from "react";
import { HeaderContainer, UserPhoto } from "../../styledComponents/Header";
import user from "./../../assets/images/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD.png";
import { Login } from "../../styledComponents/Navbar";

const Header = (props) => {

  return (
    <HeaderContainer>
      <UserPhoto alt="user" src={props.isAuth ? props.photo : user} />
      <div>{props.isAuth ? <div>{props.login}</div> : <Login to="/login">Login</Login>}</div>
    </HeaderContainer>
  );
};

export default Header;
