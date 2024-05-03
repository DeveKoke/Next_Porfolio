'use client'
import React from "react";
import styles from "../../styles/globals.module.css";
import { hobbies } from "./index";
import { useState } from 'react';
import Image from "next/image";


export default function Interests() {

  const [indexIcon, setIndexIcon] = useState(null);
  const [showInterest, setShowInterest] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  
    const openCard = (index) => {
      setIndexIcon(index);
      setShowInterest(true);
      setShowAnimation(false);
    };
    const hiddeCard = () => {
      setShowAnimation(true)
      setTimeout(() => {
        setShowInterest(false);
        setShowAnimation(false); // Reiniciar la animación después de un tiempo
      }, 300); 
    }
    
    
    return (
        <article className={styles.aboutWrapper}>
          <h3 className={styles.h3_int}>Intereses</h3>
          {showInterest ? (
            <>
              <div className={`${styles.interestCard} ${showAnimation ? styles['scale-out-vertical'] : styles['scale-in-ver-center']}`}>
                <Image className={styles.cardArrow} src="/assets/left-arrow.png" width={100} height={20} alt="volver atrás" onClick={hiddeCard}/>
                <div className={styles.interestContent}>
                  <h3>{hobbies[indexIcon].title}</h3>
                  <p className={styles.cardText}>{hobbies[indexIcon].text}</p>
                </div>  
              </div>
            </>
          ) : (
            <>
              <ul className={styles.interestsContainer}>
              <li className={styles.li} ><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src='/assets/ciencias.png' alt="icono ciencia" onClick={() => openCard(0)} /></li>                
              <li className={styles.li}><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src="/assets/photo-camera.png" alt="icono fotografia" onClick={() => openCard(2)} /></li>
              <li className={styles.li}><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src="/assets/pillar.png" alt="icono historia" onClick={() => openCard(1)} /></li>
              <li className={styles.li}><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src="/assets/plane.png" alt="icono viajar" onClick={() => openCard(3)} /></li>
              <li className={styles.li}><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src="/assets/hiker.png" alt="icono deportes" onClick={() => openCard(4)} /></li>
              <li className={styles.li}><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src="/assets/video-camera.png" alt="icono cine" onClick={() => openCard(5)} /></li>
              <li className={styles.li}><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src="/assets/leaf.png" alt="icono jardineria" onClick={() => openCard(6)} /></li>
              <li className={styles.li}><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src="/assets/headphones.png" alt="icono musica" onClick={() => openCard(7)} /></li>
              <li className={styles.li}><Image className={`${styles.interestIcon} ${!showInterest ? styles['animate-icons'] : ''}`} width={60} height={60} src="/assets/libro.png" alt="icono libros" onClick={() => openCard(8)} /></li>

              </ul>
            </>
          )}
        </article>
      );
      
}
