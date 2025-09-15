import Button from "../components/button/Button"
import ManicureSyllabus from "../components/silabuss/Silabus"
import WhoFit from "../components/whoFits/WhoFit"
import styles from "./ThirdScreen.module.css"
import { FaCalendarAlt, FaDollarSign, FaUserTie } from 'react-icons/fa'
import certificates from "../images/סמדי וקנין תעודות.png"
const ThirdScreen = () => {
    return <>
      <div className={styles.title}>עברתי עשרות הכשרות במהלך השנים</div>
    <div className={styles.center}><img className={styles.image} src={certificates}/></div>
                          <div className={styles.description}>ועכשיו אחרי שהכרנו, אני רוצה ש</div>
        <div className={styles.title}>תדמייני לעצמך את החיים האלה...</div>
        <div className={styles.description}>בעוד כמה חודשים את קמה בבוקר, ליומן מלא בלקוחות שבאות במיוחד אלייך</div>
        
        <div className={styles.descriptionWithIcon}>
            <FaCalendarAlt className={styles.icon} />
            <div className={styles.textRight}>את בוחרת מתי לקבל כל לקוחה ומתי לעבוד</div>
        </div>
        
        <div className={styles.descriptionWithIcon}>
            <FaDollarSign className={styles.icon} />
            <div className={styles.textRight}>ככל שעובר הזמן המחיר שלך לכל טיפול עולה ועולה <strong>ופתאום כל שעה שלך שווה פי כמה וכמה יותר משכר מינימום</strong></div>
        </div>
        
        <div className={styles.descriptionWithIcon}>
            <FaUserTie className={styles.icon} />
            <div className={styles.textRight}>היחידה שאת נותנת לה דין וחשבון היא אך ורק לעצמך כי לא יהיו לך בוסים על הראש</div>
        </div>
        
        <div className={styles.description} style={{textDecoration:"underline"}}><strong>ו״להתעורר לעבודה״ כבר לא מבאס אותך ואת אפילו מחכה לזה</strong></div>
        <div className={styles.description}>זו יכולה להיות המציאות שלך!</div>
        
        <div className={styles.title}>וזה קורה בדרך הבאה</div>
        <ManicureSyllabus/>
         <div className={styles.description} style={{margin:"-2% auto auto 2%"}}>*הקורס נלמד בגם אקריל וגם בטיפס הפוך*</div>
          <div className={styles.title}>למה דווקא עכשיו?</div>
               <div className={styles.description}>התשובה היא פשוטה - שנייה לפני שאנחנו עושות צעד חשוב עולים כל החששות האפשריים..</div>
               <div className={styles.fears}>
   <div className={styles.description}>מה אם זה לא יעבוד..</div>
   <div className={styles.description}>יש עוד מלא כמוני מי מבטיח לי שאני אצליח..</div>
      <div className={styles.description}>אולי כדאי לחכות קצת עם זה..</div>
               </div>
                     <div className={styles.title}>זה לגיטימי וזה קורה לכולן!</div>
                      <div className={styles.description}>אבל אם לא תעשי את הצעד הזה עכשיו למרות החששות/הנסיבות, זה כל פעם יידחה, עוד תירוצים ייעלו עם הזמן.. ובסוף, גם לא יקרה</div>
                     <div className={styles.description} style={{textDecoration:"underline"}}><strong>החיים שלך יכולים להיות שונים לחלוטין בעוד כמה חודשים מהיום וכדי להגיע לשם הדבר הראשון שאת צריכה להצטייד בו הוא אומץ</strong></div>
                                           <div className={styles.description}>תלחצי על הכפתור כאן למטה ונבדוק יחד התאמה למחזור הבא ולעבר השינוי שלך!</div>
                     <Button text="לחצי כאן לשיחת ייעוץ ללא עלות"/>
                              <div className={styles.description}>ואם את רוצה להיות בטוחה שהקורס שלי בשבילך</div>
                              <WhoFit/>
    </>
}

export default ThirdScreen