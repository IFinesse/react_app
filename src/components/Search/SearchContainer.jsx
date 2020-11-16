import React from 'react';
import SearchC from "./Search";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC, setTotalAmountAC, setCurrentPageAC} from "../../redux/search-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.searchPage.users,
        currentPage: state.searchPage.currentPage,
        totalAmount: state.searchPage.totalAmount,
        pageSize: state.searchPage.pageSize,
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalAmount: (totalAmount) => {
            dispatch(setTotalAmountAC(totalAmount));
        },
    }
} 


const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchC);

export default SearchContainer;