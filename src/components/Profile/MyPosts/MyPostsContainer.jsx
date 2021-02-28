import React from 'react';

import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                 postsData={state.profilePage.postsData}
                                 newPostText={state.profilePage.newPostText}
                        />)
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
