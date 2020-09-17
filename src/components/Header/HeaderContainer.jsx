import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import { setAuth, setAuthUserData } from "../../redux/auth-reducer";
import { setUserPhoto } from "../../redux/auth-reducer";
import { userAPI } from "../../API/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuth();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userPhoto: state.userPhoto,
  };
};

export default connect(mapStateToProps, { setAuthUserData, setUserPhoto, setAuth })(HeaderContainer);
