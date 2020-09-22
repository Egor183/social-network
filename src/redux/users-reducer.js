import { userAPI as userApi, userAPI } from "../API/api";

const FOLLOW = `FOLLOW`;
const UNFOLLOW = `UNFOLLOW`;
const SET_USERS = `SET_USERS`;
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`;
const SET_USER_TOTAL_COUNT = "SET_USER_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROCESS = "TOGGLE_IS_FOLLOWING_PROCESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_USER_TOTAL_COUNT: {
      return {
        ...state,
        totalUserCount: action.totalCount,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case TOGGLE_IS_FOLLOWING_PROCESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setUserTotalCount = (totalCount) => ({
  type: SET_USER_TOTAL_COUNT,
  totalCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleIsFollowingProcess = (followingInProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROCESS,
  followingInProgress,
  userId,
});

export const requestUsers = (page, pageSize) => {
  // thunkCreator
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(page, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUserTotalCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  // thunkCreator
  return (dispatch) => {
    dispatch(toggleIsFollowingProcess(true, userId));
    userApi.followSuccess(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleIsFollowingProcess(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  // thunkCreator
  return (dispatch) => {
    dispatch(toggleIsFollowingProcess(true, userId));
    userApi.unfollowSuccess(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleIsFollowingProcess(false, userId));
    });
  };
};

export default usersReducer;
