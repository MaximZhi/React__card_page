import React, { useState } from 'react'
import MyPostButton from '../UI/MyCustomButtons/MyPostButton';
import MyBodyInput from '../UI/MyCustomInput/MyBodyInput';
import MyTitleInput from '../UI/MyCustomInput/MyTitleInput';


const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})
const addNewPost = (e) => {
  e.preventDefault()
  const newPost = {...post, id:Date.now()}
  create(newPost)
  setPost({title:'', body:''})
}

    return ( 
        <form>
  <MyTitleInput
  value = {post.title}
  placeholder = 'Header'
  type = 'text'
  onChange = {e => setPost({...post, title:e.target.value})}
  ></MyTitleInput>
  <MyBodyInput
  value = {post.body}
  placeholder = 'Description'
  type = 'text'
  onChange = {e => setPost({...post, body:e.target.value})}
  ></MyBodyInput>
  <MyPostButton onClick = {addNewPost}>Create new Post</MyPostButton>
</form>
     );
}
 
export default PostForm;