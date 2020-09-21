import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message"


const dialogs = [
    {id:1, name: "Ivan"},
    {id:2, name: "Anna"},
    {id:3, name: "Rita"},
    {id:4, name: "Alyona"},
    {id:5, name: "Lydia"},
];

const messages = [
    {id:1, text: "Hi!"},
    {id:2, text: "How are you"},
    {id:3, text: "Ok"},
];

const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
const messagesElements = messages.map(message => <Message text={message.text} />)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                
                {dialogsElements}
                
            </div>
            <div className={s.messages}>
            
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;