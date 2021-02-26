import React from 'react';

import avatar from '../../../../assets/postAvatar.png';

import s from './Friend.module.scss';

const Friend = props => {
    return (
        <div className={s.friendCard}>
            <div className={s.friendCardPhoto}>
                <img src={avatar} alt=""/>
            </div>
            <div className={s.friendCardName}>
                <p>{props.name}</p>
            </div>
        </div>
    );
};

export default Friend;
