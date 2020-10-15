import { profileAPI } from "../API/api";
import { stopSubmit } from "redux-form";
import { call, put, takeEvery } from "redux-saga/effects";
import { all, putResolve } from "@redux-saga/core/effects";

const ADD_POST = `social-network/profilePage/ADD-POST`;
const SET_USER_PROFILE = `social-network/profilePage/SET_USER_PROFILE`;
const SET_STATUS = "social-network/profilePage/SET_STATUS";
const DELETE_POST = "social-network/profilePage/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "social-network/profilePage/SAVE_PHOTO_SUCCESS";
const SET_FLAG = "social-network/profilePage/SET_FLAG";

const CHANGE_AVATAR_SAGA = "social-network/profilePage/CHANGE_AVATAR_SAGA";
const SAVE_PROFILE_SAGA = "social-network/profilePage/SAVE_PROFILE_SAGA";
const UPDATE_STATUS_SAGA = "social-network/profilePage/UPDATE_STATUS_SAGA";
const GET_STATUS_SAGA = "social-network/profilePage/GET_STATUS_SAGA";
const GET_USER_PROFILE = "social-network/profilePage/GET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "How are you ", likesCount: "12" },
    { id: 2, message: "It's my first posts", likesCount: "32" },
  ],
  profile: null,
  status: "",
  flag: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 7, message: action.formData, likesCount: "28" }],
        newPostText: "",
      };

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.file },
      };
    }

    case SET_FLAG: {
      return {
        ...state,
        flag: action.flag,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (formData) => {
  return {
    type: ADD_POST,
    formData,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const savePhotoSuccess = (file) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    file,
  };
};

//// change avatar on saga

// export const changeAvatar = (file) => {
//   // thunkCreator
//   return async (dispatch) => {
//     let response = await profileAPI.savePhoto(file);
//     if (response.data.resultCode === 0) {
//       dispatch(savePhotoSuccess(response.data.data.photos));
//     }
//   };
// };

export const changeAvatar = (file) => {
  return {
    type: CHANGE_AVATAR_SAGA,
    file,
  };
};

function* workerChangeAvatarSaga(action) {
  let response = yield call(() => profileAPI.savePhoto(action.file));
  if (response.data.resultCode === 0) {
    yield put(savePhotoSuccess(response.data.data.photos));
  }
}

function* watchChangeAvatarSaga() {
  yield takeEvery(CHANGE_AVATAR_SAGA, workerChangeAvatarSaga);
}

////// save profile on saga

// export const saveProfile = (profile) => {
//   return async (dispatch) => {
//     let response = await profileAPI.saveProfile(profile);
//     if (response.data.resultCode === 0) {
//       dispatch(getUserProfile(profile.userId));
//     } else {
//       let error = response.data.messages[0];
//       let elem = error.slice(error.indexOf(">") + 1, -1).toLowerCase();
//       dispatch(stopSubmit("profileData", { contacts: { [elem]: error } }));
//       return Promise.reject();
//     }
//   };
// };

export const saveProfile = (profile) => {
  return {
    type: SAVE_PROFILE_SAGA,
    profile,
  };
};

function* watchSaveProfile() {
  yield takeEvery(SAVE_PROFILE_SAGA, workerSaveProfile);
}

export const setFlag = (flag) => {
  return {
    type: SET_FLAG,
    flag,
  };
};

function* workerSaveProfile(action) {
  let response = yield call(() => profileAPI.saveProfile(action.profile));
  if (response.data.resultCode === 0) {
    yield putResolve(getUserProfile(action.profile.userId));
    yield put(setFlag(false));
  } else {
    let error = yield response.data.messages[0];
    let elem = yield error.slice(error.indexOf(">") + 1, -1).toLowerCase();
    yield put(stopSubmit("profileData", { contacts: { [elem]: error } }));
    yield put(setFlag(true));
  }
}

////// update status on saga

// export const updateStatus = (status) => {
//   // thunkCreator
//   return async (dispatch) => {
//     let response = await profileAPI.updateStatus(status);
//     if (response.data.resultCode === 0) {
//       dispatch(setStatus(status));
//     }
//   };
// };

export const updateStatus = (status) => {
  return {
    type: UPDATE_STATUS_SAGA,
    status,
  };
};

function* watchUpdateStatus() {
  yield takeEvery(UPDATE_STATUS_SAGA, workerUpdateStatus);
}

function* workerUpdateStatus(action) {
  let response = yield call(() => profileAPI.updateStatus(action.status));
  if (response.data.resultCode === 0) {
    yield put(setStatus(action.status));
  }
}

///////////// get status on saga

// export const getStatus = (userId) => {
//   // thunkCreator
//   return async (dispatch) => {
//     let response = await profileAPI.getStatus(userId);
//     dispatch(setStatus(response.data));
//   };
// };

export const getStatus = (userId) => {
  return {
    type: GET_STATUS_SAGA,
    userId,
  };
};

function* watchGetStatus() {
  yield takeEvery(GET_STATUS_SAGA, workerGetStatus);
}

function* workerGetStatus(action) {
  let response = yield call(() => profileAPI.getStatus(action.userId));
  yield put(setStatus(response.data));
}

////////// get user profile on saga

// export const getUserProfile = (userId) => {
//   // thunkCreator
//   if (!userId) {
//     userId = 1;
//   }
//   return async (dispatch) => {
//     let response = await profileAPI.getProfile(userId);
//     dispatch(setUserProfile(response.data));
//   };
// };

export const getUserProfile = (userId) => {
  return {
    type: GET_USER_PROFILE,
    userId,
  };
};

function* watchGetUserProfile() {
  yield takeEvery(GET_USER_PROFILE, workerGetUserProfile);
}

function* workerGetUserProfile(action) {
  if (!action.userId) {
    action.userId = 1;
  }
  let response = yield call(() => profileAPI.getProfile(action.userId));
  yield putResolve(setUserProfile(response.data));
}

///////

export function* rootSagaProfilePage() {
  yield all([
    watchChangeAvatarSaga(),
    watchSaveProfile(),
    watchUpdateStatus(),
    watchGetStatus(),
    watchGetUserProfile(),
  ]);
}

export default profileReducer;
