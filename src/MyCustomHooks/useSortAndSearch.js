import { useMemo } from "react"



export const useSortPosts = (posts, sort) =>{
    const sortPost = useMemo(() =>{
if(sort){
  return  [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
} 
  return posts
},[sort, posts])
    return sortPost
}

export const useSort = (posts, sort, query) =>{
const sortPost = useSortPosts(posts, sort)

const sortedAndSearchedPosts = useMemo(() => {
    return sortPost.filter(post => post.title.includes(query))
}, [query, sortPost])
    return sortedAndSearchedPosts
}
export default useSort;