import { userAPI as userApi, userAPI } from "../API/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { photosType, usersType } from "../types/types";

const FOLLOW = `social-network/usersPage/FOLLOW`;
const UNFOLLOW = `social-network/usersPage/UNFOLLOW`;
const SET_USERS = `social-network/usersPage/SET_USERS`;
const SET_CURRENT_PAGE = `social-network/usersPage/SET_CURRENT_PAGE`;
const SET_USER_TOTAL_COUNT = "social-network/usersPage/SET_USER_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "social-network/usersPage/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROCESS = "social-network/usersPage/TOGGLE_IS_FOLLOWING_PROCESS";

let initialState = {
  users: [] as Array<usersType>,
  pageSize: 6 as number,
  totalUserCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // array of users
  portionSize: 15 as number,
};

export type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
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
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

type followSuccessType = {
  type: typeof FOLLOW;
  userId: number;
};

export const followSuccess = (userId: number): followSuccessType => ({
  type: FOLLOW,
  userId,
});

type unfollowSuccessType = {
  type: typeof UNFOLLOW;
  userId: number;
};

export const unfollowSuccess = (userId: number): unfollowSuccessType => ({
  type: UNFOLLOW,
  userId,
});

type setUsersType = {
  type: typeof SET_USERS;
  users: Array<usersType>;
};

export const setUsers = (users: Array<usersType>): setUsersType => ({
  type: SET_USERS,
  users,
});

type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPage = (currentPage: number): setCurrentPageType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

type setUserTotalCountType = {
  type: typeof SET_USER_TOTAL_COUNT;
  totalCount: number;
};

export const setUserTotalCount = (totalCount: number): setUserTotalCountType => ({
  type: SET_USER_TOTAL_COUNT,
  totalCount,
});

type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type toggleIsFollowingProcessType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROCESS;
  followingInProgress: boolean;
  userId: number;
};

export const toggleIsFollowingProcess = (
  followingInProgress: boolean,
  userId: number
): toggleIsFollowingProcessType => ({
  type: TOGGLE_IS_FOLLOWING_PROCESS,
  followingInProgress,
  userId,
});

export const requestUsers = (page: number, pageSize: number) => {
  // thunkCreator
  return async (dispatch:any) => {
    dispatch(toggleIsFetching(true));
    let response = await userAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setUserTotalCount(response.data.totalCount));
  };
};

export const followUnfollow = (userId: number, followFlag: boolean) => {
  // thunkCreator
  return async (dispatch: any) => {
    dispatch(toggleIsFollowingProcess(true, userId));
    let response = followFlag ? await userApi.unfollowSuccess(userId) : await userApi.followSuccess(userId);
    if (response.data.resultCode === 0) {
      dispatch(followFlag ? unfollowSuccess(userId) : followSuccess(userId));
    }
    dispatch(toggleIsFollowingProcess(false, userId));
  };
};

export default usersReducer;
