import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';


const PostList = ({posts, postsHeader, remove}) => {
    if(!posts.length){
       return <h1>No one post yet...</h1>
    }
    return ( 
        <div>
        <h1>{postsHeader}</h1>
        <TransitionGroup>
          
            {posts.map((post, index) =>
            <CSSTransition
              key={post.id}
              timeout={500}
              className='item'
            >
             <PostItem remove={remove} number={index+1} post={post} />
            </CSSTransition>
            )}
        </TransitionGroup>
        </div>
     );
}
 
export default PostList;