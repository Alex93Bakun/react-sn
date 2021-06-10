import React from "react";

import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";

import userPhoto from "../../../assets/images/user.png";

import s from "./ProfileInfo.module.scss";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  let contacts = Object.entries(profile.contacts);
  return (
    <div>
      <div className={s.descriptionBlock}>
        <h3>{profile.fullName}</h3>
        <img
          src={profile.photos.large || userPhoto}
          className={s.mainPhoto}
          alt={"Ava"}
        />
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <div>
          <h3>Обо мне</h3>
          <p>{profile.aboutMe}</p>
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
          {profile.lookingForAJob ? <p>Да</p> : <p>Нет</p>}
          <h4>Описание работы:</h4>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
