import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://m.media-amazon.com/images/M/MV5BMTMzMTg1MjgtOWNhYy00NmZmLWExOTctMjA2OTZhZDFkNDhhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"></img>
            {props.message}
                <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;