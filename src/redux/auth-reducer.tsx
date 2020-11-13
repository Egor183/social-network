import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../API/api";

const SET_USER_PHOTO = "social-network/auth/SET_USER_PHOTO";
const SET_USER_DATA = `social-network/auth/SET_USER_DATA`;

const SET_CAPTCHA = `social-network/auth/SET_CAPTCHA`;
const SET_EDIT_MODE = `social-network/auth/SET_EDIT_MODE`;

let initialState = {
  login: null as string | null,
  id: null as number | null,
  email: null as string | null,
  photo: null as string | null,
  isFetching: false,
  isAuth: false,
  captcha: null as string | null,
  logged: false,
  editMode: false,
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
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

    case SET_EDIT_MODE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type initializedSuccessActionPayloadType = {
  email: string | null;
  userId: number | null;
  login: string | null;
  isAuth: boolean;
  photo: string | null;
};

type initializedSuccessActionType = {
  type: typeof SET_USER_DATA;
  payload: initializedSuccessActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  photo: string | null
): initializedSuccessActionType => ({
  type: SET_USER_DATA,
  payload: {
    email,
    userId,
    login,
    isAuth,
    photo,
  },
});

type setUserPhotoType = {
  type: typeof SET_USER_PHOTO;
  userPhoto: string;
};

export const setUserPhoto = (userPhoto: string): setUserPhotoType => ({
  type: SET_USER_PHOTO,
  userPhoto,
});

type setEditModeType = {
  type: typeof SET_EDIT_MODE;
  payload: { editMode: boolean };
};

export const setEditMode = (editMode: boolean): setEditModeType => ({
  type: SET_EDIT_MODE,
  payload: { editMode },
});

type setCaptchaType = {
  type: typeof SET_CAPTCHA;
  payload: { captcha: string };
};

export const setCaptcha = (captcha: string): setCaptchaType => ({
  type: SET_CAPTCHA,
  payload: { captcha },
});

export const setAuth = () => {
  // thunkCreator
  return async (dispatch: any) => {
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
  return async (dispatch: any) => {
    let response = await authAPI.getCaptcha();
    return dispatch(setCaptcha(response.data.url));
  };
};

export const login = (formData: object) => async (dispatch: any) => {
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

export const logout = () => {
  // thunkCreator
  return async (dispatch: any) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false, null));
    }
  };
};

export default authReducer;
