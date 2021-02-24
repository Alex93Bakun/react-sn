import React from 'react';
import nature from "../nature-wallpapper.jpg";
import avatar from "../avatar.jpg";

const Profile = () => {
    return (
        <div className="content">
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
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
