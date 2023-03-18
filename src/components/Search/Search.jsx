import React ,{ useEffect, useState}from 'react';
import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import fecthMovies,{ requests } from '../getApi';
import Carts from '../moviesCarts/Carts';
import Spinner from '../Spinner/Spinner';
import styles from "./styles.module.css";
import {MdErrorOutline} from 'react-icons/md';
import { pathRoute } from '../../App';


function useQuery() {
  return new URLSearchParams(useLocation().search)
}


const Search = ({}) => {

       const query = useQuery();
       const search = query.get('query')
       

       const [movies, setMovies] = useState([])
       const [loading, setLoading] = useState(true)

  useEffect(() => {
    fecthMovies(requests.fetchSearch,search)
    .then(data =>{
        setMovies(data)
        setLoading(false)
    })

       return ()=>{
              setMovies([])
              setLoading(true)
           }

         }, [search])
    
   console.log(movies)
        
         if(loading){
             return <Spinner/>
         }
          

  return (
    <div>
      {movies.length===0 || movies.length === 1 && movies[0].poster_path===null ?
      (<div className={styles.message}>
      < MdErrorOutline className={styles.BsCameraVideo}/>
      <p>We couldn't find " <span>{search}</span> ".You will be able to 
      explore many titles on the <Link to={pathRoute}>home page</Link></p>
      </div>):(
      <Carts movies={movies}/>)}
    </div>

  )
}

export default Search