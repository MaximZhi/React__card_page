import React from 'react'
import classes from './MyPostButton.module.css'

const MyPostButton = ({children, ...props}) => {
    return ( 
        <button className={classes.postButton} {...props}><span>{children}</span><i></i></button>
     );
}
 
export default MyPostButton;