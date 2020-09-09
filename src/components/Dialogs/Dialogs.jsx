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



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Ivan" id={1} />
                <DialogItem name="Anna" id={2} />
                <DialogItem name="Rita" id={3} />
                <DialogItem name="Alyona" id={4} />
                <DialogItem name="Lydia" id={5} />
                
            </div>
            <div className={s.messages}>
                <Message text="Hi" />
                <Message text="How are you" />
                <Message text="Ok" />
            </div>
        </div>
    )
}

export default Dialogs;