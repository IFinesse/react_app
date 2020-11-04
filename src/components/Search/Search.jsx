import React from 'react';
import s from './Search.module.css';
import * as axios from "axios";
import userImg from "../../assets/images/user_unknown.png";


class Search extends React.Component {

    constructor (props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then(response => {
                 debugger;
                 this.props.setUsers(response.data.items)
                });
    }

    follow = (id) => {
        this.props.follow(id);
    };
    
    unfollow = (id) => {
        this.props.unfollow(id);
    }
 
    render() {
    return <div className={s.wrapper}>

            {this.props.users.map(user => <div key={user.id}>
        <div><img src={!user.photos.small ? userImg : user.photos.small}></img></div>
        <div>{user.name}</div>
        <div>{user.status || "1111"}</div>
        {/* <div>{user.location.city}</div> */}
        {/* <div>{user.location.country}</div> */}
        <div> {user.isFollowed == true ? <button onClick={() => {this.unfollow(user.id)}}>unfollow</button>
        :<button onClick={() => {this.follow(user.id)}}>follow</button>}</div>
        </div>)}

        </div>
    }
    
}

export default Search;