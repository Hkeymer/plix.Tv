import React from 'react'
import styles from "./styles.module.css"
import {AiOutlinePlayCircle} from 'react-icons/ai';

const Cart = ({poster,vote_average,title}) => {
  return (
    <div  className={styles.conten} >
       <img src={poster} 
        className={styles.poster}
        alt={title} 
         />
         <i ><AiOutlinePlayCircle/></i>
         <span className={styles.vote}>{vote_average}</span>
    </div>
  )
}

export default Cart