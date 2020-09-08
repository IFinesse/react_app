import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom'
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Ivan</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/2'>Anna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Rita</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Alyona</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Lydia</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>OK</div>
            </div>
        </div>
    )
}

export default Dialogs;