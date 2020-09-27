import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "How are you ", likesCount: "12" },
    { id: 2, message: "It's my first posts", likesCount: "32" },
  ],
};

it("length of posts should be incremented ", () => {
  // 1 test data
  let action = addPostActionCreator("Hi man");

  // 2 action
  let newState = profileReducer(state, action);

  // 3 check expect
  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
  // 1 test data
  let action = addPostActionCreator("Hi man");

  // 2 action
  let newState = profileReducer(state, action);

  // 3 check expect
  expect(newState.posts[2].message).toBe("Hi man");
});

it("after deleting posts length should be decrement", () => {
  // 1 test data
  let action = deletePost(1);

  // 2 action
  let newState = profileReducer(state, action);

  // 3 check expect
  expect(newState.posts.length).toBe(1);
});

it("after deleting posts length should be decrement if id is not be correct", () => {
  // 1 test data
  let action = deletePost(1000);

  // 2 action
  let newState = profileReducer(state, action);

  // 3 check expect
  expect(newState.posts.length).toBe(2);
});
