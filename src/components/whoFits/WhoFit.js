import React from 'react';
import { FaHeart, FaClock, FaLeaf, FaUsers, FaFire } from 'react-icons/fa';
import styles from './WhoFit.module.css';
import Button from '../button/Button';

const WhoFit = () => {
  const fitItems = [
    {
      icon: <FaHeart />,
      text: "את מרגישה שתחום היופי זה הייעוד שלך ואת רוצה להפוך את התשוקה הזו למקור הכנסה יציב"
    },
    {
      icon: <FaClock />,
      text: "נמאס לך מההוראות של מישהו אחר ואת רוצה לעבוד בזמנים שנוחים לך"
    },
    {
      icon: <FaLeaf />,
      text: "את מבינה שהצלחה אמיתית דורשת התמדה וסבלנות, ואת מוכנה להשקיע בתהליך ולא מחפשת פתרונות קסם"
    },
    {
      icon: <FaUsers />,
      text: "את מעדיפה להיות בקבוצה קטנה ואינטימית שבה את מקבלת תשומת לב אישית"
    },
    {
      icon: <FaFire />,
      text: "יש לך תשוקה אמיתית ללמוד ולהתפתח, ואת מבינה שאפילו המקצועיות הטובות ביותר ממשיכות ללמוד ולהשתפר"
    }
  ];

  return <>
    <div className={styles.whoFitContainer}>
      <div className={styles.title}>הקורס שלי מתאים לך אם:</div>
      
      {fitItems.map((item, index) => (
        <div key={index} className={styles.fitItem}>
          <div className={styles.decorativeShape}></div>
          <div className={styles.fitIcon}>
            {item.icon}
          </div>
          <div className={styles.fitText}>
            {item.text}
          </div>
        </div>
      ))}
    </div>
    <Button text="אני מתאימה סמדי בואי נדבר!"/>
 </>
};

export default WhoFit;