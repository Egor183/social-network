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
        ...action.data,
        isAuth: true,
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

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    email,
    userId,
    login,
  },
});

export const setUserPhoto = (userPhoto) => ({
  type: SET_USER_PHOTO,
  userPhoto,
});

export const chekAuth = (userPhoto) => ({
  type: SET_USER_PHOTO,
  userPhoto,
});

export const setAuth = () => {
  // thunkCreator
  return (dispatch) => {
    authAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login));
        if (id) {
          authAPI.getSmallUserPhoto(id).then((response) => {
            dispatch(setUserPhoto(response.data.photos.small));
          });
        }
      }
    });
  };
};

export default authReducer;
