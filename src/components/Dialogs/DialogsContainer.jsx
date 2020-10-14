import React from 'react';
import Dialogs from "./Dialogs"
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    const onSendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const onUpdateMessageText = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <Dialogs onSendMessage={onSendMessage} onUpdateMessageText={onUpdateMessageText} dialogs={state.dialogs} messages={state.messages} dialogCurrentMessage={state.dialogCurrentMessage}/>
    )
}

export default DialogsContainer;