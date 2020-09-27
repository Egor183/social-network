import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_USER_PHOTO = "social-network/auth/SET_USER_PHOTO";
const SET_USER_DATA = `social-network/auth/SET_USER_DATA`;

let initialState = {
  login: null,
  id: null,
  email: null,
  isFetching: false,
  isAuth: false,
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
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    email,
    userId,
    login,
    isAuth,
  },
});

export const setUserPhoto = (userPhoto) => ({
  type: SET_USER_PHOTO,
  userPhoto,
});

export const setAuth = () => {
  // thunkCreator
  return async (dispatch) => {
    let response = await authAPI.getAuthMe();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (formData) => async (dispatch) => {
  // thunkCreator
  let response = await authAPI.login(formData);
  if (response.data.resultCode === 0) {
    return dispatch(setAuth());
  } else {
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
