import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
                <Post message="hi" likesCount="2" />
                <Post message="how are you?" likesCount="10"/>
                <Post message="fine" likesCount="0"/>
            </div>
        </div>

    )
}

export default MyPosts;