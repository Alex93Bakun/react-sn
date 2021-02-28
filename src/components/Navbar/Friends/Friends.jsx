import React from 'react';
import Friend from "./Friend/Friend";

import s from './Friends.module.scss'

const Friends = props => {
    return (
        <div className={s.friends}>
            <h2>Friends</h2>
            <div className={s.friendContainer}>
                {/*{props.friendsData.map(friend => <Friend name={friend.name}/>)}*/}
            </div>
        </div>
    );
};

export default Friends;
