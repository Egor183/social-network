import { profileAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const ADD_POST = `social-network/profilePage/ADD-POST`;
const SET_USER_PROFILE = `social-network/profilePage/SET_USER_PROFILE`;
const SET_STATUS = "social-network/profilePage/SET_STATUS";
const DELETE_POST = "social-network/profilePage/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "social-network/profilePage/SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "How are you ", likesCount: "12" },
    { id: 2, message: "It's my first posts", likesCount: "32" },
  ],
  profile: null,
  status: "",
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

export const getUserProfile = (userId) => {
  // thunkCreator
  if (!userId) {
    userId = 1;
  }
  return async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};

export const getStatus = (userId) => {
  // thunkCreator
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status) => {
  // thunkCreator
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const saveProfile = (profile) => {
  return async (dispatch) => {
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(profile.userId));
    } else {
      let error = response.data.messages[0];
      let elem = error.slice(error.indexOf(">") + 1, -1).toLowerCase();
      dispatch(stopSubmit("profileData", { contacts: { [elem]: error } }));
      return Promise.reject();
    }
  };
};

export const changeAvatar = (file) => {
  // thunkCreator
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};

export default profileReducer;
