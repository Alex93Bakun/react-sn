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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Anya'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Lesha'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your IT-KAMASUTRA?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(message => <Message message={message.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;
