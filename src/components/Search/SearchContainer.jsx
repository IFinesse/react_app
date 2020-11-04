import React from 'react';
import SearchC from "./Search";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC} from "../../redux/search-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.searchPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },   
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
} 


const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchC);

export default SearchContainer;