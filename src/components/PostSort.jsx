import React from 'react';
import MyTitleInput from '../UI/MyCustomInput/MyTitleInput';
import MySelect from '../UI/MyCustomSelect/MySelect';

const PostSort = ({filter, setFilter}) => {
 
    return ( 
        <div>
<MySelect
  value = {filter.sort}
  onChange = {sortedPost => setFilter({...filter, sort:sortedPost})}
  defaultValue = 'Sort by'
  options = {[
{value:'title', name:'header'},
{value:'body', name:'description'}
  ]}
/>
<MyTitleInput
value = {filter.query}
onChange = {e => setFilter({...filter, query:e.target.value})}
type = 'text'
placeholder = 'Search...'
/>
</div>
     );
}
 
export default PostSort;