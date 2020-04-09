import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

const Post = ({ post, updatePosts }) => {
    return (
        <div className="post">
            <Link to={`/post/${post.id}`}>
                <h3>{post.postedBy}</h3>
                <p>{post.text}</p>
            </Link>
        </div>
    )
}

export default Post
