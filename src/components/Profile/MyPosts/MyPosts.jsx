import React from 'react';

import Post from "./Post/Post";

import s from './MyPosts.module.scss'

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post.', likesCount: 23},
    ];

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
                {postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};

export default MyPosts;
