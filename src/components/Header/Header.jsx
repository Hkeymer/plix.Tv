import React, { useRef, useState, useEffect} from 'react'
import styles from "./styles.module.css";
import { BiSearch} from "react-icons/bi";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {AiFillHome ,AiOutlineMenuUnfold} from 'react-icons/ai';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { pathRoute } from '../../App';
import Modal from '../Modal/Modal';
import useModal from '../useModal';


const Header = ({}) => {

  const [searchTex, setSearchTex ] = useState('')
  const [ open, openModal, closeModal ] = useModal(false);
 
  const history = useNavigate();

  const handleChange = (e) =>{
     setSearchTex(e.target.value)
   };

  const handleSubmit = (e)=> {
     e.preventDefault();
       if(searchTex){
        history(`${pathRoute}/search/movie?&query=${searchTex}`)
        setSearchTex('')
        }   
   };

  
   const handleMenue = (path) => {
      if(path==='Home') {
             history(pathRoute)
      }
     else{ 
      history(`${pathRoute}/movies/${path}`)
       }  
      closeModal()
   }
  

  const SubMenu = () =>{
     return (
         <Modal className={styles.menu_modal}
               open={open}>
                <div className={styles.menu_burgers_div}>
                <section className={styles.menu_section1}>
               <h2><AiOutlineMenuUnfold className={styles.menu_icon}/>Menu</h2> 
               <button  onClick={closeModal}
               >X</button>
               </section> 
               <p >Generos</p>  
              <section className={styles.menu_section2}>
              <button className={styles.homeResponse} onClick={()=>handleMenue('Home')} >Home</button>
              <button onClick={()=>handleMenue('action')} >Action</button>
              <button onClick={()=>handleMenue('comedy')}>Comedy </button>
              <button onClick={()=>handleMenue('horror')} >Horror</button>
              <button onClick={()=>handleMenue('romance')} >Romance </button>
              <button onClick={()=>handleMenue('netflix')} >Netflix</button>
              <button onClick={()=>handleMenue('documentaries')} > Documentaries</button>
              </section>
                </div>

          </Modal> 
     )
    }
   
   const formMenu = () =>{
      return(
      <form onSubmit={handleSubmit} className={styles.menu_form}>
        <button className={styles.menu_buttonSubmit}  type="submit"><BiSearch/></button>
        <input type="text" 
         placeholder='Search movies...'
         id='search'
         value={searchTex}
         onChange={handleChange}/> 
      </form>)
   }

  return (
    <div className= {styles.menu}>
        <nav className= {styles.menu_container}>
          <NavLink to={pathRoute} >
          <h1 className={styles.menu_logo}>p<span>lix.</span>Tv<span></span><span></span></h1>
           </NavLink>
             <div className={styles.conten_div}>

              {/* ****** SECCION L I N K S ***** */} 

             <ul className={styles.menu_links}>
             <li className={styles.menu_itemPadre}>
             <NavLink className={styles.NavLink} to={pathRoute}> 
              <span><AiFillHome/></span><p>Home</p>
             </NavLink>
             </li>
             <li className={styles.menu_itemPadre} >
             <button   
              onClick={openModal}
             className={styles.menu_burgers} >
             <span> <AiOutlineMenuUnfold/> </span>
              <p>Menu</p>
            </button>
             {SubMenu()}
             </li>
             </ul>
             {formMenu()}
             </div>
     {/* ******SECCION REDES ******/}
        <div className={styles.redes}>
              <a target="_brank" href='https://web.facebook.com/keimer.cordobaserna'><BsFacebook/></a> 
              <a target="_brank" href='https://www.linkedin.com/in/kscordobapro'><BsLinkedin/></a> 
              <a target="_brank" href='https://github.com/Hkeymer'><BsGithub/></a> 
        </div>
    </nav>
            
    </div>
  )
}

export default Header