import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const dialogsData = [
    {id:1, name: "Ivan"},
    {id:2, name: "Anna"},
    {id:3, name: "Rita"},
    {id:4, name: "Alyona"},
    {id:5, name: "Lydia"},
];

const messagesData = [
    {id:1, text: "Hi!"},
    {id:2, name: "How are you"},
    {id:3, name: "Ok"},
];

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name="Anna" id={2} />
                <DialogItem name="Rita" id={3} />
                <DialogItem name="Alyona" id={4} />
                <DialogItem name="Lydia" id={5} />
                
            </div>
            <div className={s.messages}>
                <Message text={messagesData[0].text} />
                <Message text="How are you" />
                <Message text="Ok" />
            </div>
        </div>
    )
}

export default Dialogs;