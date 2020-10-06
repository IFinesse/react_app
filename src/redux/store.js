import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
            dialogCurrentMessage: "",
        }
    },

    _callSubscriber (state) {
        console.log("no subscribers/observers");
    },

    getState() {
        return this._state;
    },
    

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
      
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this.getState());

    },

}

export default store;