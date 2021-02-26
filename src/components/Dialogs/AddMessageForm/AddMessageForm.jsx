import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

const AddMessageForm = props => {
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <form>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export default AddMessageForm;
