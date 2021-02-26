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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}
export default store;

window.state = store;
