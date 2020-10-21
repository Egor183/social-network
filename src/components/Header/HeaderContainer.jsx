import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {}
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
    profile: state.profilePage.profile,
    photo: state.auth.photo,
  };
};

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
