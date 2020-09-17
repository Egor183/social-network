import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostTextActionCreator: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },

    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
