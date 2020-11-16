import React from 'react';
import s from './Search.module.css';
import * as axios from "axios";
import userImg from "../../assets/images/user_unknown.png";


class Search extends React.Component {

    // constructor (props) {
    //     super(props);
       
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items);
            this.props.setTotalAmount(response.data.totalCount);
           });
    }

    follow = (id) => {
        this.props.follow(id);
    };
    
    unfollow = (id) => {
        this.props.unfollow(id);
    }


    setCurrentPage = (currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
    .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setCurrentPage(currentPage);
       });

    }
 
    render() {

        let pagesAmount = Math.ceil(this.props.totalAmount/this.props.pageSize);
        let pages = [];

        for (let i=1; i<=pagesAmount;i++) {
            pages.push(i);
        }

    //     const setCurrentPage = (currentPage) => {
    //         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
    //     .then(response => {
    //         this.props.setUsers(response.data.items);
    //         this.props.setCurrentPage(currentPage);
    //        });
    // }
        

    return <div className={s.wrapper}>

        <div className={s.numbersOfPages}>

            {pages.map(page => {
            return    <span className={page == this.props.currentPage && s.currentPage} onClick={() => {this.setCurrentPage(page)}}>{page}</span>
            })}
           
        </div>

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