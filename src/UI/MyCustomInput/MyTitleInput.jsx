import React from 'react'
import classes from './MyTitleInput.module.css'

const MyTitleInput = ({...props}) => {
    return ( 
      
        <input {...props} className={classes.myTitleInput}></input>
    
     );
}
 
export default MyTitleInput;