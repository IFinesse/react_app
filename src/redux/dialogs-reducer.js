const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
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