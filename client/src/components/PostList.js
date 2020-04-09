import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
import './PostList.css'

const PostList = ({ users }) => {
    const [selectedUser, setUser] = useState(0)
    const [posts, updatePosts] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:5000/api/users/${selectedUser}/posts`).then(response => {
        console.log(response.data);
        updatePosts(response.data);
      })
      .catch(error => console.log(error));
    }, [selectedUser]);
    
    const handleChange = event => {
        console.log(selectedUser);
        setUser(event.target.value);
    }

    return (
        <div className="post-list">
            <select onChange={handleChange}>
            <option disabled selected>test</option>
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
            <h2>Articles</h2>
            {posts.map(post => <Post key={post.id} post={post} updatePosts={updatePosts}/>)}
        </div>
    )
}

export default PostList
