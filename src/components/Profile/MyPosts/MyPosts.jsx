import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    // let posts = [
    //     {id:1, message:"hi", likesCount:2000},
    //     {id:2, message:"how are you????", likesCount:99},
    //     {id:3, message:"ok", likesCount:200},
    // ];

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

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
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;