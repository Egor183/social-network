import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  changeAvatar,
  getStatus,
  getUserProfile,
  saveProfile,
  setFlag,
  setUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  getProfile() {
    let newUserId = this.props.match.params.userId;
    newUserId = Number(newUserId);
    if (!newUserId) {
      newUserId = this.props.meId;

      if (!newUserId) {
        return this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(newUserId);
    this.props.getStatus(newUserId);
  }

  componentDidMount() {
    this.getProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
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
        flag={this.props.flag}
        setFlag={this.props.setFlag}
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
    flag: state.profilePage.flag,
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
    setFlag,
  }),
  withRouter
)(ProfileContainer);
