import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  changeAvatar,
  getStatus,
  getUserProfile,
  saveProfile,
  setUserProfile,
  startEditMode,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { setEditMode } from "../../redux/auth-reducer";

class ProfileContainer extends React.Component {
  getProfile() {
    let newUserId = this.props.match.params.userId;
    debugger;
    newUserId = Number(newUserId);
    if (!newUserId) {
      newUserId = this.props.meId;

      if (!newUserId) {
        return this.props.history.push("/login");
      }
    }

    this.props.getUserProfile(newUserId, this.props.stEditMode);

    this.props.getStatus(newUserId);
  }

  componentDidMount(prevProps) {
    this.getProfile();
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (prevProps.stEditMode !== this.props.stEditMode || this.props.match.params.userId === "null") {
      this.getProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={Number(this.props.match.params.userId)}
        meId={this.props.meId}
        profile={this.props.profile}
        aboutMe={this.props.aboutMe}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        changeAvatar={this.props.changeAvatar}
        saveProfile={this.props.saveProfile}
        editMode={this.props.editMode}
        startEditMode={this.props.startEditMode}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    meId: state.auth.userId,
    isAuth: state.auth.isAuth,
    editMode: state.auth.editMode,
    stEditMode: state.profilePage.stEditMode,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus,
    changeAvatar,
    saveProfile,
    setEditMode,
    startEditMode,
  }),
  withRouter
)(ProfileContainer);
