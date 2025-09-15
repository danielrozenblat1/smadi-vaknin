import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import samdarImage from "../../images/סמדר ללא רקע.png";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }

    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  const handleWhatsAppMessage = () => {
    const phoneNumber = "+972524094313";
    const message = "היי סמדר הגעתי מהדף שלך, אשמח לשמוע עוד על הקורסים";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={containerRef} className={styles.section} id="מי אני">
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
          <img src={samdarImage} alt="סמדר וקנין" className={styles.image} />
        </div>

        <div className={`${styles.content} ${styles.revealItem}`}>
          <h2 className={styles.mainTitle}>נעים מאוד, סמדר וקנין</h2>

          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              תמיד התעסקתי ביופי - החלקות, ריסים, ספרות.  כל מה שסובב יופי, אמנם אהבתי את זה, אבל לא הרגשתי שמצאתי את המקום שלי. יום אחד חברה ביקשה ממני לנסות לבנות לה ציפורניים. לא היה לי ציוד מקצועי, רק הבנה בסיסית.אבל ברגע שראיתי את הניצוץ בעיניים שלה, הבנתי שזה זה. זה היה הרגע ששינה אצלי הכל!.
            </p>

             <p className={styles.paragraph}>
              נכנסתי לעולם הציפורניים בלב שלם. בהתחלה עבדתי המון עד שהיומן שלי היה מפוצץ. למדתי שההצלחה בתחום הזה מבוססת על שלושה עקרונות: התמדה, סבלנות ותרגול.
            </p>

            <p className={styles.paragraph}>
              היום, אחרי יותר מ־27 שנות ניסיון, אני לא רק בונה ומעצבת ציפורניים, אני גם מלמדת נשים אחרות איך להפוך את האהבה שלהן לקריירה. הקורסים שלי קטנים ואישיים, כי אני מאמינה שכל אחת ראויה לליווי אמיתי. אני איתך בכל צעד - לא רק מלמדת טכניקה, אלא גם איך לבנות ביטחון, קליינטורה יציבה ועסק שמכניס כסף מבלי לאבד את ההנאה.
            </p>

            <p className={styles.paragraph}>
              אם תמיד חלמת לעבוד בתחום שאת אוהבת, להרגיש עצמאית ולדעת שאת שולטת בזמן ובדרך שלך - את במקום הנכון. אני כאן כדי לשתף את כל מה שלמדתי במשך עשרות שנים, כדי שתוכלי לקצר לעצמך את הדרך ולהתחיל לבנות עתיד שהוא באמת שלך.
            </p>
          </div>

          <button className={styles.ctaButton} onClick={handleWhatsAppMessage}>
            <span className={styles.buttonIcon}>💬</span>
            לפרטים על הקורסים, לחצי כאן
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
