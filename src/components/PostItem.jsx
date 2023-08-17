import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyPostButton from '../UI/MyCustomButtons/MyPostButton';


const PostItem = (props) => {
const navigate = useNavigate()

    return ( 
    <div className='post'>
<div className='post__title'>{props.post.id}.<strong>{props.post.title}</strong></div>
<div className='post__content'>{props.post.body}</div>
<div className='post__btn'>
  <MyPostButton onClick={() => navigate(`/posts/${props.post.id}`)}>open post</MyPostButton>
  <MyPostButton onClick={() => props.remove(props.post)}>delete post</MyPostButton>
</div>
    </div>
     );
}
 
export default PostItem;