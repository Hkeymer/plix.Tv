import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import fecthMovies,{ requests } from '../getApi';
import Carts from '../moviesCarts/Carts';
import Spinner from '../Spinner/Spinner';



const Categorias = ({}) => {
  
   

  const { name } = useParams()

  const [movies, setMovies] = useState([])
  


  useEffect(() => {

   if (name === 'action') {
    console.log(true)
    fecthMovies(requests.fetchAction)
    .then(data =>{
      console.log(data)
      setMovies(data)}) 
   }

   if (name === 'netflix') {
    console.log(true)
    fecthMovies(requests.fetchNetflix)
    .then(data =>{
      console.log(data)
      setMovies(data)}) 
   }
   
   if (name === 'horror') {
    fecthMovies(requests.fetchHorror) 
    .then(data =>{
      setMovies(data)})
   }

   if (name === 'comedy') {
    fecthMovies(requests.fetchComedy) 
    .then(data =>{
      setMovies(data)})
   }

   if (name === 'romance') {
    fecthMovies(requests.fetchRomance) 
    .then(data =>{
      setMovies(data)})
   }

   if (name === 'documentaries') {
    fecthMovies(requests.fetchDocumentaries) 
    .then(data =>{
      setMovies(data)})
   }


   return () => {
         
          setMovies([])
              
            }


  }, [name])



   if (movies.length===0) {
       return <Spinner/>
   }
   
  return (
    <div>
      <Carts 
       movies={movies}
       />
    </div>
  )
}

export default Categorias;