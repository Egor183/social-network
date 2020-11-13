import { profileAPI } from "../API/api";
import { stopSubmit } from "redux-form";
import { setEditMode } from "./auth-reducer";
import { photosType, postsType, profileType } from "../types/types";

const ADD_POST = `social-network/profilePage/ADD-POST`;
const SET_USER_PROFILE = `social-network/profilePage/SET_USER_PROFILE`;
const SET_STATUS = "social-network/profilePage/SET_STATUS";
const DELETE_POST = "social-network/profilePage/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "social-network/profilePage/SAVE_PHOTO_SUCCESS";
const START_EDIT_MODE = "social-network/profilePage/START_EDIT_MODE";

let initialState = {
  posts: [
    { id: 1, message: "How are you ", likesCount: 12 },
    { id: 2, message: "It's my first posts", likesCount: 32 },
  ] as Array<postsType>,
  profile: null as profileType | null,
  status: "" as string,
  newPostText: "" as string,
  stEditMode: false as boolean,
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 7, message: action.newPostText, likesCount: 28 }],
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
        profile: { ...state.profile, photos: action.file } as profileType,
      };
    }

    case START_EDIT_MODE: {
      return {
        ...state,
        stEditMode: action.flag,
      };
    }

    default:
      return state;
  }
};

type startEditModeType = {
  type: typeof START_EDIT_MODE;
  flag: boolean;
};

export const startEditMode = (flag: boolean): startEditModeType => {
  return {
    type: START_EDIT_MODE,
    flag,
  };
};

type addPostActionCreatorType = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

type setUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: profileType;
};

export const setUserProfile = (profile: profileType): setUserProfileType => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

type deletePostType = {
  type: typeof DELETE_POST;
  postId: number;
};

export const deletePost = (postId: number): deletePostType => {
  return {
    type: DELETE_POST,
    postId,
  };
};

type setStatusType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatus = (status: string): setStatusType => {
  return {
    type: SET_STATUS,
    status,
  };
};

type savePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  file: photosType;
};

export const savePhotoSuccess = (file: photosType): savePhotoSuccessType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    file,
  };
};

export const getUserProfile = (userId: number, stEditMode: boolean) => {
  // thunkCreator
  if (!userId) {
    userId = 1;
  }
  return async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    await dispatch(setUserProfile(response.data));
    if (stEditMode) {
      dispatch(setEditMode(true));
    } else {
      dispatch(setEditMode(false));
    }
  };
};

export const getStatus = (userId: number) => {
  // thunkCreator
  return async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status: string) => {
  // thunkCreator
  return async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const saveProfile = (profile: profileType) => {
  return async (dispatch: any) => {
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(profile.userId, false));
      dispatch(setEditMode(false));
    } else {
      let error = response.data.messages[0];
      let elem = error.slice(error.indexOf(">") + 1, -1).toLowerCase();
      dispatch(stopSubmit("profileData", { contacts: { [elem]: error } }));
      dispatch(setEditMode(true));
    }
  };
};

export const changeAvatar = (file: photosType) => {
  // thunkCreator
  return async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};

export default profileReducer;
