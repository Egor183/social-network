import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  setUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.getUserProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.getUserProfile();
  }

  getUserProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.meId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };

  render() {
    // if (!this.props.isAuth) {
    //   return <Redirect to={"/login"} />;
    // }

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
  // withAuthRedirect
)(ProfileContainer);
