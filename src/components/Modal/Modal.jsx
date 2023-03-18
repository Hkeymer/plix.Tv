import React from 'react';
import styles from "./styles.module.css";

const Modal = ({children,open}) => {
  return (
    <div className={styles.menu_modal }
     style={{display:open?'flex':'none'}}>
     {children}
    </div>
  )
}

export default Modal