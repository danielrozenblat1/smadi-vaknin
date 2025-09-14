import { BenefitsContainer } from "../components/benefitsHistalmut/BenefitHishtalmut"
import styles from "./SecondScreen.module.css"
const SecondScreen=()=>{
return <>
<div className={styles.title}>לא הגעת לכאן סתם</div>
<div className={styles.description}>את כאן כי נמאס לך</div>
<BenefitsContainer/>
<div className={styles.description}>ואני מבינה אותך כל כך טוב מסיבה אחת פשוטה</div>
<div className={styles.title}>הייתי בדיוק בנקודה שאת נמצאת בה היום</div>
</>

}
export default SecondScreen