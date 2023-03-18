import styles from "./styles.module.css";
import React from 'react'
import { VscLoading } from "react-icons/vsc";

const Spinner = () => {
  return (
    <div className={styles.conten} >
    <div className={styles.Spiner} >
    <div style={{ marginTop:"12.5rem"}}>
      <h1><span><VscLoading className={styles.spinn}/></span></h1>
      </div>
    </div> 
    </div>
  )
}

export default Spinner
