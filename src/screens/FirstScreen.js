import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './FirstScreen.module.css';
import middleImage from "../images/סמדר וקנין תמונה ראשית.png";
import Loader from '../components/loader/Loader';
import PrivacyPolicy from '../privacy/Privacy';

const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // State עבור מדיניות הפרטיות
  const [agreed, setAgreed] = useState(false);

  // Refs for form fields
  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "Smadi1223@icloud.com"; // מייל של סמדר

  useEffect(() => {
    const imageUrls = [
      middleImage,
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  const handleButtonClick = () => {
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden'; // מונע גלילה ברקע
  };

  const closeForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = 'auto'; // מחזיר את הגלילה
    // איפוס השדות אם הטופס נסגר ללא שליחה
    if (!submitted) {
      if (fullNameRef.current) fullNameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (reasonRef.current) reasonRef.current.value = "";
      setErrors({
        fullName: '',
        phone: '',
        reason: ''
      });
      setAgreed(false); // איפוס גם לתיבת האישור
    }
  };

  // פונקציה לטיפול בקליק על מדיניות הפרטיות
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const reason = reasonRef.current.value;
    
    // בדיקת אישור מדיניות הפרטיות
    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }
    
    // Validate inputs
    let valid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!name.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (name.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    } else {
      newErrors.fullName = '';
    }

    // Validate phone number (Israeli format)
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    } else {
      newErrors.phone = '';
    }

    // Validate reason
    if (!reason.trim()) {
      newErrors.reason = 'נא להזין סיבת פנייה';
      valid = false;
    } else if (reason.trim().length < 5) {
      newErrors.reason = 'נא להזין לפחות 5 תווים';
      valid = false;
    } else {
      newErrors.reason = '';
    }

    setErrors(newErrors);
    
    if (!valid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: "", // Not required in this form but included in the API structure
      reason: reason,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          fullNameRef.current.value = "";
          phoneRef.current.value = "";
          reasonRef.current.value = "";
          setSubmitted(false);
          setErrors({
            fullName: '',
            phone: '',
            reason: ''
          });
          setAgreed(false); // איפוס גם לתיבת האישור
          closeForm();
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
          <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
          <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
        </div>
        
        {/* תיאור עליון */}
        <div className={styles.topDescription}>
          תמיד חלמת לעסוק בתחום הציפורניים ולהתפרנס ממנו? <br/> סמדר וקנין מציגה:
        </div>
        
        {/* תוכן מרכזי */}
        <div className={styles.contentBox}>
          <div className={styles.title}>
            הדרך לבנות עסק רווחי שמכניס 5 ספרות בחודש עם יומן מלא בתחום הציפורניים
          </div>
          
          <div className={styles.description}>
            קורס פרקטי בן 4 מפגשים בהדרכת סמדר וקנין - בקורס תלמדי איך לטפל בכל סוגי הציפורניים, תלמדי איך להוציא עבודות ברמה של מניקורסיטית מתקדמת, איך לשווק את עצמך ברשתות ולמלא יומן תוך זמן קצר
          </div>
          
          <div className={styles.experienceText}>
            גם אם אין לך נסיון קודם ולא נגעת במכונת שיוף בחיים 
          </div>
          
          {/* כפתור */}
          <button className={styles.ctaButton} onClick={handleButtonClick}>
            לחצי כאן לשיחת התאמה ללא עלות
          </button>
        </div>
      </div>

      {/* Form Overlay */}
      {isFormOpen && (
        <div className={styles.contactOverlay + ' ' + styles.active} onClick={closeForm}>
          <div className={styles.contactForm} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeForm}>
              <FaTimes />
            </button>
            
            <h2 className={styles.formTitle}>יצירת קשר</h2>
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="fullName">שם מלא</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`${styles.formInput} ${errors.fullName ? styles.inputError : ''}`}
                  placeholder="השם המלא שלך"
                  disabled={isSubmitting || submitted}
                  ref={fullNameRef}
                />
                {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="phone">מספר טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="050-0000000"
                  disabled={isSubmitting || submitted}
                  ref={phoneRef}
                />
                {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="reason">סיבת הפנייה</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="4"
                  className={`${styles.formTextarea} ${errors.reason ? styles.inputError : ''}`}
                  placeholder="סיבת הפנייה"
                  disabled={isSubmitting || submitted}
                  ref={reasonRef}
                />
                {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
              </div>
              
              {/* תיבת האישור למדיניות הפרטיות */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                marginTop: "20px",
                marginBottom: "20px"
              }}>
                <label style={{ 
                  direction: "rtl", 
                  fontFamily: "AssistantR", 
                  fontSize: "0.9rem", 
                  textAlign: "right", 
                  display: "flex", 
                  alignItems: "center", 
                  flexWrap: "wrap", 
                  gap: "5px" 
                }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    style={{ marginLeft: "10px" }}
                    disabled={isSubmitting || submitted}
                  />
                  קראתי את
                  <span onClick={handlePrivacyClick}>
                    <PrivacyPolicy 
                      ownerName="סמדר וקנין" 
                      email="Smadi1223@icloud.com" 
                      phone="+972 52-409-4313" 
                      domain="https://smadivaknin.co.il/" 
                    />
                  </span>
                  ואני מאשר/ת
                </label>
              </div>
              
              <div className={styles.formButtons}>
                <button 
                  type="submit" 
                  className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
                  disabled={isSubmitting || submitted}
                >
                  {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'סמדר, בואי נדבר!'}
                </button>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={closeForm}
                  disabled={isSubmitting || submitted}
                >
                  ביטול
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstScreen;