import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    const messagesElements = props.messages.map(message => <Message text={message.text} />)

    const onSendMessage = () => {
        props.onSendMessage();
    }

    const onUpdateMessageText = (e) => {
        let text = e.target.value;
        props.onUpdateMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}
                <div className={s.addMessage}>
                    <textarea onChange={onUpdateMessageText} placeholder="enter your message" value = {props.dialogCurrentMessage}/>
                    <div><button onClick={onSendMessage}>Send</button></div> 
                </div>
                

            </div>
        </div>
    )
}

export default Dialogs;