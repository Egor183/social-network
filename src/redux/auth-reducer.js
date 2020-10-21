import { authAPI, profileAPI } from "../API/api";
import { stopSubmit } from "redux-form";
import { call } from "redux-saga/effects";

const SET_USER_PHOTO = "social-network/auth/SET_USER_PHOTO";
const SET_USER_DATA = `social-network/auth/SET_USER_DATA`;

const SET_CAPTCHA = `social-network/auth/SET_CAPTCHA`;

let initialState = {
  login: null,
  id: null,
  email: null,
  isFetching: false,
  isAuth: false,
  photo: null,
  captcha: null,
  count: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_USER_PHOTO:
      return {
        ...state,
        ...action.userPhoto,
      };

    case SET_CAPTCHA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth, photo) => ({
  type: SET_USER_DATA,
  payload: {
    email,
    userId,
    login,
    isAuth,
    photo
  },
});

export const setUserPhoto = (userPhoto) => ({
  type: SET_USER_PHOTO,
  userPhoto,
});

export const setCaptcha = (captcha) => ({
  type: SET_CAPTCHA,
  payload: { captcha },
});

export const setAuth = () => {
  // thunkCreator
  return async (dispatch) => {
    let response = await authAPI.getAuthMe();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      let profile = await profileAPI.getProfile(id);
      let photo = profile.data.photos.small;
      dispatch(setAuthUserData(id, email, login, true, photo));
    }
  };
};

export const getCaptcha = () => {
  // thunkCreator
  return async (dispatch) => {
    let response = await authAPI.getCaptcha();
    return dispatch(setCaptcha(response.data.url));
  };
};

export const login = (formData) => async (dispatch) => {
  // thunkCreator
  let response = await authAPI.login(formData);

  if (response.data.resultCode === 0) {
    return dispatch(setAuth());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
    }
    let error = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: error }));
  }
};

export const logout = (formData) => {
  // thunkCreator
  return async (dispatch) => {
    let response = await authAPI.logout(formData);
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
