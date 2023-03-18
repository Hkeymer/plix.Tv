import React,{ useEffect , useState } from "react";
import fecthMovies, { requests } from "../getApi";
import Carts from "../moviesCarts/Carts";
import Spinner from "../Spinner/Spinner";


const Home = ({}) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fecthMovies().then(data=>{setMovies(data)})
     return ()=>{
             setMovies([])
              }
    }, [])

      if(movies.length===0) return <Spinner/>

  return (
    <div >
      <div >
          <Carts  
           movies={movies} 
            />
        </div>  
    </div>
     )
}

export default Home