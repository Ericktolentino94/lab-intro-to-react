import React from 'react';
import Post from './Post';
const Posts = () => {
    return (
        <ul className = 'allPost'>
            <h2>Post</h2>
            <Post/>
            <Post/>
            <Post/>
        </ul>
    );
}

export default Posts;
