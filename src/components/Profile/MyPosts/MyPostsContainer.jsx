import React from 'react';
import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import storeContext from '../../../storeContext';

const MyPostsContainer = () => {

    // let state = props.store.getState();

    return (
        <storeContext.Consumer> 
        { store => {
            const onPostMessageChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }
        
            const onAddPost = () => {
                store.dispatch(addPostActionCreator());
            }
            return (
                <MyPosts posts={store.getState().profilePage.posts} onPostMessageChange={onPostMessageChange} onAddPost={onAddPost} currentMessage={store.getState().profilePage.postCurrentMessage} />
            )
        }
        }
        </storeContext.Consumer>
        
    )
}

export default MyPostsContainer;