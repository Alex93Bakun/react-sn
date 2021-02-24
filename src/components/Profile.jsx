import React from 'react';

import nature from "../assets/nature-wallpapper.jpg";
import avatar from "../assets/avatar.jpg";

import s from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={nature} alt="nature-wallpaper"/>
            </div>
            <div>
                <img src={avatar} alt="avatar"/>
                <p>description</p>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
