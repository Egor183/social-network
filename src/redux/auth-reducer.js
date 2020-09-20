import { authAPI } from "../API/api";

const SET_USER_PHOTO = "SET_USER_PHOTO";

const SET_USER_DATA = `SET_USER_DATA`;

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
  return (dispatch) => {
    authAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
        if (id) {
          authAPI.getSmallUserPhoto(id).then((response) => {
            dispatch(setUserPhoto(response.data.photos.small));
          });
        }
      }
    });
  };
};

export const login = (formData) => {
  // thunkCreator
  return (dispatch) => {
    authAPI.login(formData).then((response) => {
      if (response.data.resultCode === 0) {
        return dispatch(setAuth());
      } else {
        alert("Попробуйте еще раз");
      }
    });
  };
};

export const logout = (formData) => {
  // thunkCreator
  return (dispatch) => {
    authAPI.logout(formData).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
