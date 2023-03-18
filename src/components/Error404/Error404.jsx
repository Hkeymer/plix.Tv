import React from 'react'
import { Link } from 'react-router-dom';
import { pathRoute } from '../../App';
import styles from "./styles.module.css"
import img from '../../img/poster.jpg';



const Error404 = () => {
  return ( <div className={styles.Error404}>
     <h3>NSES - <span>404</span></h3>
      <p>We have not found this page. You will be able to explore many titles on the home page</p>
     <Link to={pathRoute}>Home of plixtv</Link>
        </div>
  )
}

export default Error404