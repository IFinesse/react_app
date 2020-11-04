import React from 'react';
import s from './Search.module.css';
import * as axios from "axios";
import userImg from "../../assets/images/user_unknown.png";


const SearchF = (props) => {
    debugger;
    if(props.users.length === 0) {
        debugger;
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then(response => {
                 debugger;
                 props.setUsers(response.data.items)
                });

    }
    const follow = (id) => {
        props.follow(id);
    };
    
    const unfollow = (id) => {
        props.unfollow(id);
    }

    return <div className={s.wrapper}>

            {props.users.map(user => <div key={user.id}>
        <div><img src={!user.photos.small ? userImg : user.photos.small}></img></div>
        <div>{user.name}</div>
        <div>{user.status || "1111"}</div>
        {/* <div>{user.location.city}</div> */}
        {/* <div>{user.location.country}</div> */}
        <div> {user.isFollowed == true ? <button onClick={() => {unfollow(user.id)}}>unfollow</button>:<button onClick={() => {follow(user.id)}}>follow</button>}</div>
        </div>)}

        </div>
    
}

export default SearchF;