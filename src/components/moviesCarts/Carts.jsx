import React,{useState, useEffect}from 'react'
import Cart from '../moviesCart/Cart'
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import { IMAGE_PATH } from "../getApi";
import { pathRoute } from '../../App';



const Carts = ({movies}) => {
     

    return (
    <div  className={styles.conten} >
    <div  className={styles.Grid} >
    {movies.map((data) =>(data.poster_path && <div key={data.id}>
      <Link to={`${pathRoute}/movie/detail/${data.id}`}>
          <Cart poster={`${IMAGE_PATH}${data.poster_path}`}
           title={data.title}
           />
         </Link>
    </div>))
     }
     </div>
     </div>
  )
}

export default Carts