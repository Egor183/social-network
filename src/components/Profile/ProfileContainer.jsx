import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} aboutMe={this.props.aboutMe} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    aboutMe: state.profilePage.aboutMe,
  };
};

export default compose(connect(mapStateToProps, { setUserProfile, getUserProfile }), withRouter, withAuthRedirect)(ProfileContainer);
