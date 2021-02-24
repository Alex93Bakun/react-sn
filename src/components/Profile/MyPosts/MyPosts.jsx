import React from 'react';

import Post from "./Post/Post";

import s from './MyPosts.module.scss'

const MyPosts = () => {
    return (
        <div>
            <textarea/>
            <button>Add post</button>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;
