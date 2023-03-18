import React from 'react'
import styles from "./Slyles.module.css"
import {BsFacebook,BsLinkedin,BsGithub}from "react-icons/bs"

const Footer = () => {
  return (
    <div className={styles.Footer}>

      <div className={styles.grupo1}>
      <div className={styles.box}>
        <figure className={styles.logo}>
        <h1 className={styles.menu_logo}>p<span>lix.</span>Tv<span></span><span></span></h1>
        </figure>
      </div>
      <div className={styles.box}>
        <h2>TV Y PELÍCULAS</h2>
        <p>Todo  desde un mismo lugar</p>
        <p>Disfruta de tus series y películas favoritas </p>
      </div>
      <div className={styles.box}>
      <h2>REDES</h2>
      <div className={styles.redSocial}>
      <a target="_brank" href='https://www.linkedin.com/in/kscordobapro'><BsLinkedin/></a> 
      <a target="_brank" href='https://web.facebook.com/keimer.cordobaserna'><BsFacebook/></a> 
      <a target="_brank" href='https://github.com/Hkeymer'><BsGithub/></a> 
       </div>
      </div>
      </div>
      <div className={styles.grupo2}>
      <small>&copy; 2022 <b>PLIXTV</b> - Todos los derechos reservados.</small>
    </div>
    </div>
  )
}

export default Footer
