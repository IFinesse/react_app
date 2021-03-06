import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    const onPostMessageChange = () => {
        props.onPostMessageChange(newPostElement.current.value);
    }

    const onAddPost = () => {
        props.onAddPost();
    }

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (

        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostMessageChange} value={props.currentMessage} />
                </div>
                <div>
                    <button onClick={onAddPost} >add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;