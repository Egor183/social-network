import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, setUserProfile, updateStatus } from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.getProfile();
  }

  componentDidUpdate(prevProps) {
    this.getProfile();
  }

  getProfile() {
    let newUserId = this.props.match.params.userId;
    newUserId = Number(newUserId);
    if (!newUserId) {
      newUserId = this.props.meId;
      if (!newUserId) {
        return this.props.history.push("/login");
      }
    }
    if (this.props.userId !== newUserId) {
      this.props.getUserProfile(newUserId);
      this.props.getStatus(newUserId);
    }
  }

  render() {
    if (!this.props.isAuth && this.props.userId===null) return <Redirect to="/login" />;
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        aboutMe={this.props.aboutMe}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    aboutMe: state.profilePage.aboutMe,
    status: state.profilePage.status,
    meId: state.auth.userId,
    isAuth: state.auth.isAuth,
    userId: state.profilePage.userId,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter
)(ProfileContainer);
