import React from "react";
import Testimonials from "../newRecommends/NewRecommends";
import headerImage from "../../images/סמדר תדמית.png"
// Import all testimonial images
import recommend1 from "../../images/סמדי וקנין המלצות 1.png";
import recommend2 from "../../images/סמדי וקנין המלצות 2.png";
import recommend3 from "../../images/סמדי וקנין המלצות 3.png";
import recommend4 from "../../images/סמדי וקנין המלצות 4.png";
import recommend5 from "../../images/סמדי וקנין המלצות 5.png";
import recommend6 from "../../images/סמדי וקנין המלצות 6.png";
import recommend7 from "../../images/סמדי וקנין המלצות 7.png";
import recommend8 from "../../images/סמדי וקנין המלצות 8.png";
import recommend9 from "../../images/סמדי וקנין המלצות 9.png";
import recommend10 from "../../images/סמדי וקנין המלצות 10.png";
import recommend11 from "../../images/סמדי וקנין המלצות 11.png";
import styles from "./RecommendsScreen.module.css";
import Button from "../button/Button";

const RecommendsScreen = () => {
  // Create array of testimonial images
  const testimonialImages = [
    { src: recommend1 },
    { src: recommend2 },
    { src: recommend3 },
    { src: recommend4 },
    { src: recommend5 },
    { src: recommend6 },
    { src: recommend7 },
    { src: recommend8 },
    { src: recommend9 },
  { src: recommend10 },
  { src: recommend11 },
  ];

  return (
    <>
      <div className={styles.recommendsContainer}>
        {/* אלמנט דקורטיבי */}
        <div className={styles.decorativeElement}></div>
        
        <div className={styles.rightSection}>
          <h2 className={styles.title}>שיצאו ממני כשהן מדברות ככה:</h2>
          <div className={styles.headerImageContainer}>
            <img 
              src={headerImage} 
              alt="תמונת כותרת" 
              className={styles.headerImage} 
            />
          </div>
        </div>
        
        <div className={styles.leftSection}>
          <Testimonials testimonialImages={testimonialImages} />
          
        </div>
           
      </div>
 
    </>
  );
};

export default RecommendsScreen;