import React from 'react';

import s from "./Post.module.scss";
import postAvatar from '../../../../assets/postAvatar.png';

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src={postAvatar} alt="Avatar"/>
                Post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
