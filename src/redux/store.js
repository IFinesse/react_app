
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
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber (state) {
        console.log("no subscribers/observers");
    },

    addPost () {
        let that = this;
        let newPost = {
            id: 5,
            message: that._state.profilePage.postCurrentMessage,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this.updatePostMessageChange('');
        this._callSubscriber(this.getState());
    },

    updatePostMessageChange (currentMessage) {
        this._state.profilePage.postCurrentMessage = currentMessage;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

}

export default store;