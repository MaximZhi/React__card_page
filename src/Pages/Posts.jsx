import React, { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import '../App.css';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import PostSort from '../components/PostSort';
import { useFetching } from '../MyCustomHooks/useFetching';
import { useObserver } from '../MyCustomHooks/useObserver';
import { useSort } from '../MyCustomHooks/useSortAndSearch';
import Loader from '../UI/Loader/Loader';
import MyInputButton from '../UI/MyCustomButtons/MyInputButton';
import MyModal from '../UI/MyModal/MyModal';
import Pagination from '../UI/Pagination/pagination';
import getTotalPages from '../Utils/getTotalPages';
import MySelect from '../UI/MyCustomSelect/MySelect';

function Posts() {

const [posts, setPosts] = useState([])
const [modal, setModal] = useState(false)
const [filter, setFilter] = useState({sort:'', query:''})
const [totalPages, setTotalPages] = useState(0)
const [limit, setLimit] = useState(10)
const [page, setPage] = useState(1)
const sortedAndSearchedPosts = useSort(posts, filter.sort, filter.query)
const lastElement = useRef()
const [fetchPosts, isPostLoading, postsError] = useFetching(async(limit, page) =>{
  const response = await PostService.getAll(limit, page)
  setPosts([...posts, ...response.data])
  const totalCount = response.headers['x-total-count']
  setTotalPages(getTotalPages(totalCount, limit))
})

useObserver(lastElement, page<totalPages, isPostLoading, () => {
  setPage(page + 1)
})

const addNewPost = (newPost) =>{
  setPosts([...posts, newPost])
  setModal(false)
}
const removePost = (post) =>{
  setPosts(posts.filter(p => p.id !== post.id))
}


useEffect(() =>{
  fetchPosts(limit, page)
},[page, limit])

const changePage = (page) =>{
  setPage(page)
}

  return (
    <div className="App">
<MyInputButton onClick={() => setModal(true)}>Create new Post</MyInputButton>
<MyInputButton onClick={fetchPosts}>Load fake Posts</MyInputButton>
<MyModal visible={modal} setVisible={setModal}>
<PostForm create={addNewPost}/>
</MyModal>
<PostSort filter={filter} setFilter={setFilter}/>
<MySelect 
  value={limit}
  onChange={value => setLimit(value)}
  defaultValue='max posts on the page'
  options ={[
    {value:5, name:'5'},
    {value:10, name:'10'},
    {value:25, name:'25'},
    {value:-1, name:'all'}
  ]}
/>
<Pagination page={page} changePage={changePage} totalPages={totalPages}/>
{postsError &&
<h1>ERROR: {postsError}</h1>
}
{isPostLoading &&
 <Loader/> }
 <PostList remove={removePost} posts={sortedAndSearchedPosts} postsHeader='Posts about...'/>
<div ref={lastElement} style={{height:15}}></div>
    </div>
  );
}

export default Posts;
