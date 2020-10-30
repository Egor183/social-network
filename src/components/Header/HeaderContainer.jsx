import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout, setEditMode } from "../../redux/auth-reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class HeaderContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.editMode) {
      this.props.setEditMode(false);
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
  };
};

export default compose(
  connect(mapStateToProps, {
    logout,
    setEditMode,
  }),
  withRouter
)(HeaderContainer);
