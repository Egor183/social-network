import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout, setEditMode } from "../../redux/auth-reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { startEditMode } from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.editMode === true) {
      this.props.startEditMode(false);
    }
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
    photo: state.auth.photo,
    meId: state.auth.userId,
    editMode: state.auth.editMode,
    stEditMode: state.profilePage.stEditMode,
  };
};

export default compose(
  connect(mapStateToProps, {
    logout,
    setEditMode,
    startEditMode,
  }),
  withRouter
)(HeaderContainer);
