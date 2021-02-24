import React from 'react';

import Post from "./Post/Post";

import s from './MyPosts.module.scss'

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?"/>
                <Post message="It's my first post."/>
            </div>
        </div>
    );
};

export default MyPosts;
