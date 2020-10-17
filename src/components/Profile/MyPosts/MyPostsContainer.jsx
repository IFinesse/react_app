import React from 'react';
import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        currentMessage: state.profilePage.postCurrentMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostMessageChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        onAddPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;