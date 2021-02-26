import React from 'react';

import nature from "../../../assets/nature-wallpapper.jpg";
import avatar from "../../../assets/avatar.jpg";

import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.wallpaperContainer}>
                <img className={s.wallpaper} src={nature} alt="nature-wallpaper"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={avatar} alt="avatar" width="200" height="356"/>
                <p>description</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
