import React from 'react';

import s from "./Post.module.scss";
import postAvatar from '../../../../assets/postAvatar.png';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src={postAvatar} alt="Avatar"/>
                {props.message}
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
