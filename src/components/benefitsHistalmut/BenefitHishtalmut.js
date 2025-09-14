import React from 'react';
import needle from "../../icons/wired-outline-2522-single-bed-hover-pinch.json"
import technic from "../../icons/wired-outline-1846-employee-working-hover-working.json"

import shake from "../../icons/wired-outline-1660-noticeboard-hover-pinch.json"
import work from "../../icons/wired-outline-1596-nails-hover-pinch (3).json"
import styles from './BenefitHishtalmut.module.css';
import ScrollReveal from 'scrollreveal';
import { useEffect,useRef } from 'react';
import {Player} from "@lordicon/react"

const VerticalIconCard = ({ text, icon }) => {

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };
  
  const playerRef1 = useRef(null);
  
  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);
  
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.text}`, {
      duration: 1000,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);
  
  return (
    <div className={styles.card}>
       <div className={styles.icon}>
        <Player 
          icon={icon} 
          ref={playerRef1} 
          size="100%" 
          onComplete={handleComplete}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

// יתרונות השתלמות המיקרובליידינג של רחלי מנקודת מבט התלמידה
const BenefitsContainer = () => {

  const benefits = [

    {
      icon: technic,
      text: "לעבוד קשה בשביל לסיים את החודש עם שכר מינימלי"
    },
   
    {
      icon: shake,
      text: "לקבל הוראות מבוס ולהיות תלוייה בו לאורך כל השבוע"
    },
        {
      icon: needle,
      text: "לקום כל בוקר בכוח מהמיטה כדי להגיע לעבודה שאת לא אוהבת"
    },
     {
      icon: work,
      text:"להסתכל על תחום הציפורניים מהצד אבל לחשוש להכנס אליו"
    },

   
  ];

  return (
    <div className={styles.container}>
      {benefits.map((benefit, index) => (
        <VerticalIconCard 
          key={index} 
          text={benefit.text} 
          icon={benefit.icon}
        />
      ))}
    </div>
  );
};

export default VerticalIconCard;
export { BenefitsContainer };