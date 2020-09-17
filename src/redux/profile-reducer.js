import { userAPI, userAPI as userApi } from "../API/api";
import { toggleIsFollowingProcess, unfollowSuccess } from "./users-reducer";

const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;
const SET_USER_PROFILE = `SET_USER_PROFILE`;

let initialState = {
  posts: [
    { id: 1, message: "How are you ", likesCount: "12" },
    { id: 2, message: "It's my first posts", likesCount: "32" },
  ],
  newPostText: "hello ",
  profile: null,
  aboutMe: "fff",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: "28" }],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile, aboutMe: action.profile.aboutMe };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const getUserProfile = (userId) => {
  // thunkCreator
  return (dispatch) => {
    if (!userId === undefined) {
      userId = 1;
    }
    userAPI.getUserData(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export default profileReducer;
