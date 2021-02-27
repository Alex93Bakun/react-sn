import React from 'react';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

import s from './Dialogs.module.scss';

const Dialogs = props => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                <div>
                    {state.messagesData.map(message => <Message message={message.message}/>)}
                </div>
                <div>
                    <div>
                        <textarea value={state.newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
