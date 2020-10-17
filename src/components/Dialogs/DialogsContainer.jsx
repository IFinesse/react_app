import React from 'react';
import Dialogs from "./Dialogs"
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
// import storeContext from '../../storeContext';
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        dialogCurrentMessage: state.dialogsPage.dialogCurrentMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
        onSendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;