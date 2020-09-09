import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="hi" likesCount="2" />
                <Post message="how are you?" likesCount="10" />
                <Post message="fine" likesCount="0" />
            </div>
        </div>

    )
}

export default MyPosts;