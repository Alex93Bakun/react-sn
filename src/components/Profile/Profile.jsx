import React from 'react';

import nature from "../../assets/nature-wallpapper.jpg";
import avatar from "../../assets/avatar.jpg";

import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.wallpaperContainer}>
                <img className={s.wallpaper} src={nature} alt="nature-wallpaper"/>
            </div>
            <div>
                <img src={avatar} alt="avatar"/>
                <p>description</p>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
