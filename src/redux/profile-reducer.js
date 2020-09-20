import { profileAPI, userAPI } from "../API/api";

const ADD_POST = `ADD-POST`;
const SET_USER_PROFILE = `SET_USER_PROFILE`;
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "How are you ", likesCount: "12" },
    { id: 2, message: "It's my first posts", likesCount: "32" },
  ],
  profile: null,
  aboutMe: "",
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 7, message: action.formData, likesCount: "28" },
        ],
        newPostText: "",
      };

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
        aboutMe: action.profile.aboutMe,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
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

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUserProfile = (userId) => {
  // thunkCreator
  return (dispatch) => {
    if (!userId === undefined) {
      userId = 1;
    }
    userAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  // thunkCreator
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  // thunkCreator
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
