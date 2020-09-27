import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {


    let newPostElement = React.createRef();

    const addPost = () => {
        let text=newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = null;
    }

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (

        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;