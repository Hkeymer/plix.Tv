import React,{useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { API_KEY, IMAGE_PATH } from '../getApi';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {MdErrorOutline} from 'react-icons/md';
import styles from "./styles.module.css";
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';
import YouTube from 'react-youtube';
import { pathRoute } from '../../App';
import Modal from '../Modal/Modal';
import useModal from '../useModal';




const Detail = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mostrarMas, setMostrarMas] = useState(false);
  const [pause, setPause] = useState(false)
  const [ openTrailer, openModalTrailer, closeModalTrailer ] = useModal(false);


  const contadorDeCaracteres = (string , num) => {

    if (string?.length > num ) return `${string.substring(0,num-1)}...`;
   
       return string;
     }  



  useEffect(()=>{
  
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
    .then(rest => rest.json())
    .then(data =>{
      setMovie(data)
      setLoading(false)
          if(data.videos && data.videos.results){
            const trailerData = data.videos.results.find(video=>video.name==='Official Trailer'?
            video.name==='Official Trailer':video)
              setTrailer(trailerData)
            }
         });

     return () =>{
         setMovie([])
         setLoading(true)
         setTrailer(null)
       }

  },[id])
   
     const isOpen = ()=>{
           openModalTrailer()
           setPause(false)
     }
   
     const close = ()=>{
          closeModalTrailer()
          setPause(true)
           }

       console.log(pause)

      if (loading) return <Spinner/>;
      


  return (
    <div>
      {
       !movie.backdrop_path || movie.poster_path===null?
       (
       <div className={styles.message}>
            <span><MdErrorOutline/></span>
        <p>We couldn't find information about this movie.<Link to={pathRoute}>return to homepage</Link></p>
        </div>
        ):(

          <div>

            {/* ***** SECCION B A  N N E R ****** */}

          <div className={styles.banner}
              style={{backgroundImage:`url(${IMAGE_PATH}${movie.backdrop_path?movie.backdrop_path:movie.poster_path})`}}>
                
                <button 
                  className={styles.BsPlay}
                  onClick={isOpen}
                  ><AiOutlinePlayCircle/></button>

              <Modal  open={openTrailer} >  
              { trailer&&!pause?
               <div className={styles.conten_trailer} 
               style={{position:'relative'}} >  
                <button className={styles.modal_cerrar} onClick={close} >X</button>
                <YouTube
               videoId={trailer.key}
               className={styles.reproductor}
               opts={
                 {
                  height:'100%',
                  width:'100%',
                  onPause:pause?'noop':'defaults',
                  playerVars:
                  {
                     autoplay:1,
                     controls:0,
                     cc_load_policy:0
                   } 
                  }
                }/></div>:
                  (<div className={styles.message_trailer}>
                     <button className={styles.modal_cerrar} onClick={closeModalTrailer} >X</button>
                        <p className={styles.icon}><MdErrorOutline/></p>
                        <div>
                          <span>El video no está disponible</span>
                           <p>Este video no está disponible</p>
                         </div>
                     </div>)}
                 </Modal>

              <div className={styles.degradado}></div> 
          </div>
    
          <section className={styles.contenedor}>

            {/* ***** SECCION P O S T E R ****** */}

               <div className={styles.contenedor_foto}>
                 <div className={styles.contenedor_foto_div}>
                 <img className={styles.poster}
                  src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                 </div>
               </div>

            {/* ***** SECCION D E S C R I P C I O N ****** */}

               <div className={styles.contenedor_descripcion}>
      
                   <h2>{movie.title}</h2>

                    {movie.spoken_languages&&
                    <span><ul className={styles.info_lenguaje}>
                    {movie.spoken_languages.map((item) =>item.name&&
                    <li key={item.id} >{item.name}</li>)}</ul></span>}
     
                    <span><div className={styles.info_año}>
                      Fecha de Lanzamiento | {movie.release_date}</div>
                    </span>
    
                    <p>{!mostrarMas?contadorDeCaracteres(movie.overview,200):movie.overview}</p>
                    <button className={styles.contenedor_mostramas}
                     onClick={()=>setMostrarMas(!mostrarMas)}>
                     {mostrarMas===false?'Mostra mas':'Mostrar menos'}
                     </button>
    
                   <div className={styles.info} >
                    {movie.genres && 
                   <span>
                   <ul className={styles.info_genero}>
                    {movie.genres.map((item)=><li key={item.id}>{item.name}</li>)}
                    </ul>
                  </span>}
         </div>
               </div>

          </section>
        <Footer/>
        </div>
        )
      }
    </div>
  
  )
}

export default Detail