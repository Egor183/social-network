import { profileAPI } from "../API/api";

const ADD_POST = `social-network/profilePage/ADD-POST`;
const SET_USER_PROFILE = `social-network/profilePage/SET_USER_PROFILE`;
const SET_STATUS = "social-network/profilePage/SET_STATUS";
const DELETE_POST = "social-network/profilePage/DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "How are you ", likesCount: "12" },
    { id: 2, message: "It's my first posts", likesCount: "32" },
  ],
  profile: null,
  aboutMe: "",
  status: "",
  userId: null,
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
        aboutMe: action.profile.aboutMe,
        userId: action.userId,
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

export const setUserProfile = (profile, userId) => {
  return {
    type: SET_USER_PROFILE,
    profile,
    userId,
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

export const getUserProfile = (userId) => {
  // thunkCreator
  if (!userId) {
    userId = 1;
  }
  return async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data, userId));
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

export default profileReducer;
