import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Dialogs.module.scss';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = props => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Sanya" id="2"/>
                <DialogItem name="Anya" id="3"/>
                <DialogItem name="Andrey" id="4"/>
                <DialogItem name="Sergey" id="5"/>
                <DialogItem name="Lesha" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="How is your IT-KAMASUTRA?"/>
                <Message message="Yo!"/>
            </div>
        </div>
    );
};

export default Dialogs;
