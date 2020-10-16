import React from 'react';
import Dialogs from "./Dialogs"
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import storeContext from '../../storeContext';

const DialogsContainer = () => {

    // let state = props.store.getState().dialogsPage;

    

    return (
        <storeContext.Consumer>
            {store => {
                const onSendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                const onUpdateMessageText = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text));
                }
                return (
                    <Dialogs onSendMessage={onSendMessage} onUpdateMessageText={onUpdateMessageText} dialogs={store.getState().dialogsPage.dialogs} messages={store.getState().dialogsPage.messages} dialogCurrentMessage={store.getState().dialogsPage.dialogCurrentMessage} />
                )
            }
            }
        </storeContext.Consumer>

    )
}

export default DialogsContainer;