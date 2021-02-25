import React from 'react';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.scss';

const Dialogs = props => {
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
