
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message:"hi", likesCount:9000},
                {id:2, message:"how are you????", likesCount:99},
                {id:3, message:"ok", likesCount:200},
            ],
            postCurrentMessage: "666",
        },
    
        dialogsPage: {
            dialogs: [
                {id:1, name: "Ivan"},
                {id:2, name: "Anna"},
                {id:3, name: "Rita"},
                {id:4, name: "Alyona"},
                {id:5, name: "Lydia"},
            ],
              messages: [
                {id:1, text: "Hi!"},
                {id:2, text: "How are you"},
                {id:3, text: "Ok"},
            ],
            dialogCurrentMessage: "777",
        }
    },

    _callSubscriber (state) {
        console.log("no subscribers/observers");
    },

    getState() {
        return this._state;
    },

    
    
    addPost () {
        // let that = this;
        let newPost = {
            id: 5,
            message: this._state.profilePage.postCurrentMessage,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this.updateNewPostText('');
        this._callSubscriber(this.getState());
    },

    updateNewPostText (currentMessage) {
        this._state.profilePage.postCurrentMessage = currentMessage;
        this._callSubscriber(this._state);
    },

    addMessage () {
        let newMessage = {
            id: 4,
            text: this._state.dialogsPage.dialogCurrentMessage,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.dialogCurrentMessage = "";
        this._callSubscriber(this.getState());
    },

    updateMessageText (text) {
        this._state.dialogsPage.dialogCurrentMessage = text;
        this._callSubscriber(this.getState());
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST: this.addPost();
            break;
            case UPDATE_NEW_POST_TEXT: this.updateNewPostText(action.currentText);
            break;
            case ADD_MESSAGE: this.addMessage();
            break;
            case UPDATE_MESSAGE_TEXT: this.updateMessageText(action.currentText)
        }
    },

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, currentText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, currentText: text});

export default store;