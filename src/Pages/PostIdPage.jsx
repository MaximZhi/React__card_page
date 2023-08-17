import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../MyCustomHooks/useFetching';
import Loader from '../UI/Loader/Loader';


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async(id) =>{
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, errorComments] = useFetching(async(id) =>{
        const response = await PostService.getComments(id)
        setComments(response.data)
    })
    useEffect(() =>{
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
console.log(comments)
    return ( 
        <div>
            <h1>You are open the post # {params.id}</h1>
            {isLoading
            ? <Loader/>
            : <div>{post.id}. {post.title}</div>
            }
            {isCommentsLoading}
            {comments.map(comm => 
            <div key={comm.id}>
            <h3>{comm.name}(writer:{comm.email})</h3>
            <h4>{comm.body}</h4>
            </div>
            )}
        </div>
     );
}
 
export default PostIdPage;