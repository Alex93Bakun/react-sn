import React from 'react';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

import s from './Dialogs.module.scss';

const Dialogs = props => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messagesData.map(message => <Message message={message.message}/>)}
            </div>
            <AddMessageForm/>
        </div>
    );
};

export default Dialogs;
