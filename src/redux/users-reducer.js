import { userAPI as userApi, userAPI } from "../API/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { call, put, takeEvery } from "redux-saga/effects";
import { all } from "@redux-saga/core/effects";

const FOLLOW = `social-network/usersPage/FOLLOW`;
const UNFOLLOW = `social-network/usersPage/UNFOLLOW`;
const SET_USERS = `social-network/usersPage/SET_USERS`;
const SET_CURRENT_PAGE = `social-network/usersPage/SET_CURRENT_PAGE`;
const SET_USER_TOTAL_COUNT = "social-network/usersPage/SET_USER_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "social-network/usersPage/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROCESS = "social-network/usersPage/TOGGLE_IS_FOLLOWING_PROCESS";

const REQUEST_USERS_SAGA = "social-network/usersPage/REQUEST_USERS_SAGA";
const FOLLOW_UNFOLLOW_SAGA = "social-network/usersPage/FOLLOW_UNFOLLOW_SAGA";

let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  portionSize: 10,
};

const usersReducer = (state = initialState, action) => {
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

////////////////  request users on saga
// export const requestUsers = (page, pageSize) => {
//   // thunkCreator
//   return async (dispatch) => {
//     dispatch(toggleIsFetching(true));
//     let response = await userAPI.getUsers(page, pageSize);
//     dispatch(toggleIsFetching(false));
//     dispatch(setUsers(response.data.items));
//     dispatch(setUserTotalCount(response.data.totalCount));
//   };
// };

export const requestUsers = (page, pageSize) => {
  return {
    type: REQUEST_USERS_SAGA,
    page,
    pageSize,
  };
};

function* watchRequestUsers() {
  yield takeEvery(REQUEST_USERS_SAGA, workerRequestUsers);
}

function* workerRequestUsers(action) {
  yield put(toggleIsFetching(true));
  let response = yield call(() => userAPI.getUsers(action.page, action.pageSize));
  yield put(toggleIsFetching(false));
  yield put(setUsers(response.data.items));
  yield put(setUserTotalCount(response.data.totalCount));
}

//////// followUnfollow on saga

// export const followUnfollow = (userId, followFlag) => {
//   // thunkCreator
//   return async (dispatch) => {
//     dispatch(toggleIsFollowingProcess(true, userId));
//     let response = followFlag ? await userApi.unfollowSuccess(userId) : await userApi.followSuccess(userId);
//     if (response.data.resultCode === 0) {
//       dispatch(followFlag ? unfollowSuccess(userId) : followSuccess(userId));
//     }
//     dispatch(toggleIsFollowingProcess(false, userId));
//   };
// };

export const followUnfollow = (userId, followFlag) => {
  return {
    type: FOLLOW_UNFOLLOW_SAGA,
    userId,
    followFlag,
  };
};

function* watchFollowUnfollow() {
  yield takeEvery(FOLLOW_UNFOLLOW_SAGA, workerFollowUnfollow);
}

function* workerFollowUnfollow(action) {
  yield put(toggleIsFollowingProcess(true, action.userId));
  let response = action.followFlag
    ? yield call(() => userApi.unfollowSuccess(action.userId))
    : yield call(() => userApi.followSuccess(action.userId));
  if (response.data.resultCode === 0) {
    yield put(action.followFlag ? unfollowSuccess(action.userId) : followSuccess(action.userId));
  }
  yield put(toggleIsFollowingProcess(false, action.userId));
}

export function* rootSagaUsers() {
  yield all([watchRequestUsers(), watchFollowUnfollow()]);
}

export default usersReducer;
