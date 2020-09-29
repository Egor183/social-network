import React from "react";
import { connect } from "react-redux";
import {
  follow,
  followSuccess,
  requestUsers,
  setCurrentPage,
  toggleIsFollowingProcess,
  unfollow,
  unfollowSuccess,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preaolader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize, getPortionSize,
  getTotalUserCount,
  getUsers
} from "../../redux/users-selectors";
import Paginator from "../Common/Paginator/Paginator";

class UsersContainer extends React.Component {
  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let { currentPage, pageSize } = this.props;
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(currentPage, pageSize);
  };

  render() {
    return (
      <>
        <Paginator
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          totalItemsCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          portionSize={this.props.portionSize}
        />
        {this.props.isFetching ? (
          <Preloader />
        ) : (
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
        )}
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUserCount: state.usersPage.totalUserCount,
//     currentPage: state.usersPage.currentPage,
//     CurrentPage: state.usersPage.CurrentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    meId: state.auth.userId,
    isAuth: state.auth.isAuth,
    userId: state.profilePage.userId,
    portionSize: getPortionSize(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleIsFollowingProcess,
    requestUsers,
    follow,
    unfollow,
  })
)(UsersContainer);
