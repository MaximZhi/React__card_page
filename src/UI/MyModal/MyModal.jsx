import React from 'react'
import cl from './MyModal.module.css'

const MyModal = ({visible, setVisible, children}) => {
    
    const modal = [cl.myModal]
    if (visible){
    modal.push(cl.active)
}

    return ( 
        <div className={modal.join(' ')} onClick = {() => setVisible(false)}>
            <div className={cl.myModalContent} onClick = {(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
     );
}
 
export default MyModal;