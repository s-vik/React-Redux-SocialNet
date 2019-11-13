import React from 'react';
import s from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}><img src={props.ava} alt='ava'/> {props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;