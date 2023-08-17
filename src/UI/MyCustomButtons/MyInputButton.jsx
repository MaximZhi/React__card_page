import React from 'react'
import classes from './MyInputButton.module.css'

const MyInputButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.inputButton}>{children}</button>
     );
}
 
export default MyInputButton;