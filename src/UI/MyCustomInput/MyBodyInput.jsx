import React from 'react'
import classes from './MyBodyInput.module.css'

const MyBodyInput = ({...props}) => {
    return ( 
      
        <textarea {...props} className={classes.myTitleInput}></textarea>
        
    
     );
}
 
export default MyBodyInput;