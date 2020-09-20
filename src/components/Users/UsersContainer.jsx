import React from "react";
import { connect } from "react-redux";
import {
  follow,
  followSuccess,
  getUsers,
  setCurrentPage,
  toggleIsFollowingProcess,
  unfollow,
  unfollowSuccess,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preaolader/Preloader";
import { compose } from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followSuccess={this.props.followSuccess}
          unfollowSuccess={this.props.unfollowSuccess}
          followingInProgress={this.props.followingInProgress}
          toggleIsFollowingProcess={this.props.toggleIsFollowingProcess}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    CurrentPage: state.usersPage.CurrentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleIsFollowingProcess,
    getUsers,
    follow,
    unfollow,
  })
)(UsersContainer);
