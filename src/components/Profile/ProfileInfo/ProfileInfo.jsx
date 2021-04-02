import React from "react";

import Preloader from "../../common/Preloader/Preloader";

import nature from "../../../assets/images/nature-wallpapper.jpg";
import user from "../../../assets/images/user.png";

import s from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  let contacts = Object.entries(props.profile.contacts);
  return (
    <div>
      <div className={s.wallpaperContainer}>
        <img className={s.wallpaper} src={nature} alt="nature-wallpaper" />
      </div>
      <div className={s.descriptionBlock}>
        <h3>{props.profile.fullName}</h3>
        {props.profile.photos.large ? (
          <img src={props.profile.photos.large} alt="avatar" />
        ) : (
          <img src={user} alt="avatar" />
        )}
        <div>
          <h3>Обо мне</h3>
          <p>{props.profile.aboutMe}</p>
        </div>
        <div>
          <h3>Контакты</h3>
          {contacts.map((c) => {
            return (
              c[1] && (
                <p>
                  <b>{c[0]}:</b>
                  <a href={c[1]}>{c[1]}</a>
                </p>
              )
            );
          })}
        </div>
        <div>
          <h3>Ищу работу</h3>
          {props.profile.lookingForAJob ? <p>Да</p> : <p>Нет</p>}
          <h4>Описание работы:</h4>
          <p>{props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
