import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    // const messageElement = React.createRef();

    const dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    const messagesElements = props.state.messages.map(message => <Message text={message.text} />)

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const onUpdateMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}
                <div className={s.addMessage}>
                    <textarea onChange={onUpdateMessageText} placeholder="enter your message" value = {props.state.dialogCurrentMessage}/>
                    <div><button onClick={addMessage}>Send</button></div> 
                </div>
                

            </div>
        </div>
    )
}

export default Dialogs;