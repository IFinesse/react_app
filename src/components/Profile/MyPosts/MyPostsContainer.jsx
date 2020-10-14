import React from 'react';
import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const onPostMessageChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    const onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return (
        <MyPosts posts={state.profilePage.posts} onPostMessageChange={onPostMessageChange} onAddPost={onAddPost} currentMessage={state.profilePage.postCurrentMessage} />
    )
}

export default MyPostsContainer;