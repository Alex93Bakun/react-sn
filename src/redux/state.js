const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'It\'s my first post.', likesCount: 23},
            ],
            newPostText: 'New text'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sanya'},
                {id: 3, name: 'Anya'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Sergey'},
                {id: 6, name: 'Lesha'}
            ],
            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How is your IT-KAMASUTRA?'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'Yo!'},
                {id: 5, message: 'Yo!'},
            ],
            newMessageText: 'New message'
        },
        sidebar: {
            friendsData: [
                {id: 1, name: 'Friend 1'},
                {id: 2, name: 'Friend 2'},
                {id: 3, name: 'Friend 3'},
                {id: 4, name: 'Friend 4'},
                {id: 5, name: 'Friend 5'},
                {id: 6, name: 'Friend 6'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 10,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newMessage: text
    }
}

export default store;

window.state = store;