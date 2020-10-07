const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE: 
        let newMessage = {
            id: 4,
            text: state.dialogCurrentMessage,
        };
        state.messages.push(newMessage);
        state.dialogCurrentMessage = "";
        return state;

        case UPDATE_MESSAGE_TEXT: 
        state.dialogCurrentMessage = action.currentText;
        return state;

        default: 
        return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, currentText: text});


export default dialogsReducer;