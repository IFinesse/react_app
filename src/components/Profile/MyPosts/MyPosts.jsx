import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id:1, message:"hi", likesCount:2000},
        {id:2, message:"how are you", likesCount:99},
        {id:3, message:"ok", likesCount:200},
    ];

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message="how are you?" likesCount="10" />
                <Post message="fine" likesCount="0" />
            </div>
        </div>

    )
}

export default MyPosts;