import React from 'react';
import styles from './Recommends.module.css';
import Button from '../button/Button';

// Import your images
import result1 from "../../images/סמדר וקנין 1.png";
import result2 from "../../images/סמדר וקנין 2.png";
import result3 from "../../images/סמדר וקנין 3.png";
import result4 from "../../images/סמדר וקנין 4.png";
import result5 from "../../images/סמדר וקנין 5.png";
import result6 from "../../images/סמדר וקנין 6.png";
import result7 from "../../images/סמדר וקנין 7.png";
import result8 from "../../images/סמדר וקנין 8.png";
import result9 from "../../images/סמדר וקנין 9.png";
import result10 from "../../images/סמדר וקנין 10.png";
import result11 from "../../images/סמדר וקנין 11.png";
import result12 from "../../images/סמדר וקנין 12.png";
import result13 from "../../images/סמדר וקנין 13.png";
import result14 from "../../images/סמדר וקנין 14.png";
import result15 from "../../images/סמדר וקנין 15.png";
import result16 from "../../images/סמדר וקנין 16.png";
import result17 from "../../images/סמדר וקנין 17.png";
import result18 from "../../images/סמדר וקנין 18.png";
import result19 from "../../images/סמדר וקנין 19.png";
import result20 from "../../images/סמדר וקנין 20.png";
import result21 from "../../images/סמדר וקנין 21.png";
import result22 from "../../images/סמדר וקנין 22.png";
import result23 from "../../images/סמדר וקנין 23.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4,result5, result6, result7, result8, 
    result9, result10, result11, result12, result13, result14,result15,result16,result17,result18,result19,result20,result21,result22,result23
  ];

  return (
    <>
      <div className={styles.title}>
ב-27 השנים האחרונות עברו אצלי אלפי נשים
      </div>

   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Button text="סמדר, בואי נדבר!" /> */}
    </>
  );
};

export default Works;