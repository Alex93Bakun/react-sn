import React from "react";
import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";

let state = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 0 },
    { id: 2, message: "It's my first post.", likesCount: 23 },
  ],
};

it("length of postsData should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("testing text");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});

it("id of new post should be 3", () => {
  // 1. test data
  let action = addPostActionCreator("testing text");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData[2].id).toBe(3);
});

it("message of new post should be testing text", () => {
  // 1. test data
  let action = addPostActionCreator("testing text");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData[2].message).toBe("testing text");
});

it("likes count of new post should be 0", () => {
  // 1. test data
  let action = addPostActionCreator("testing text");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData[2].likesCount).toBe(0);
});

it("after deleting length of messages should be decremented", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(1);
});

it("after deleting length shouldn't be decremented if id is incorrect", () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(2);
});
