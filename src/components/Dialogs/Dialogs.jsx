import React from "react";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.dialogsData.map((dialog) => (
          <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={s.messages}>
        <div>
          {state.messagesData.map((message) => (
            <Message key={message.id} message={message.message} />
          ))}
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
