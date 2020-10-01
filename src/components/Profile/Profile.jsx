import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} currentMessage={props.state.postCurrentMessage} addPost={props.addPost} updatePostMessageChange={props.updatePostMessageChange}/>
        </div>
    )
}

export default Profile;