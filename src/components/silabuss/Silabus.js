import React, { useState } from 'react';
import { 
  Calendar, Users, Book, Scissors, Zap, Palette, Hammer,
  HandMetal, Target, Wrench, Bone, Pill, Droplets, 
  Diamond, Square, Sparkles, Trash, Ruler, ArrowUpRight,
  Settings, Paintbrush, X, Hand, Crosshair, Eye,
  Triangle, BarChart3, Flag, Gem, RefreshCw, Construction,
  Heart, FileText, Plus, Minus
} from 'lucide-react';
import styles from './Silabus.module.css';
import Button from '../button/Button';

const ManicureSyllabus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sessions = [
    {
      number: 1,
      title: "יסודות ובסיסים",
      icon: <Users className={styles.sessionIcon} />,
      topics: [
        { icon: <HandMetal size={16} />, text: "רקע כללי והכרות" },
        { icon: <Target size={16} />, text: "תיאום ציפיות" },
        { icon: <Wrench size={16} />, text: "הכרת הציוד" },
        { icon: <Bone size={16} />, text: "אנטומיה בסיסית" },
        { icon: <Heart size={16} />, text: "מחלות ציפורניים" },
        { icon: <Droplets size={16} />, text: "סטריליזציה תיאורתית + תרגול מעשי" },
        { icon: <Diamond size={16} />, text: "סוגי פצירות" },
        { icon: <Square size={16} />, text: "סוגי צורה (מרובע, שקד...)" },
        { icon: <Sparkles size={16} />, text: "מניקור אירופאי" },
        { icon: <Trash size={16} />, text: "המסה חלקית באציטון" },
        { icon: <Ruler size={16} />, text: "שיוף צורה" },
        { icon: <Scissors size={16} />, text: "אחיזה בצבתית מספריים + תרגול מעשי" }
      ]
    },
    {
      number: 2,
      title: "עבודה עם מכונה ולק ג'ל",
      icon: <Zap className={styles.sessionIcon} />,
      topics: [
        { icon: <Settings size={16} />, text: "עבודה עם מכונה" },
        { icon: <Wrench size={16} />, text: "סוגי ראשים" },
        { icon: <ArrowUpRight size={16} />, text: "כיוונים במכונה" },
        { icon: <Palette size={16} />, text: "מניקור מכשירי בסיסי עם סט מתחילות" },
        { icon: <Ruler size={16} />, text: "ישור לוחית ציפורן" },
        { icon: <Sparkles size={16} />, text: "תהליך הלק ג'ל" },
        { icon: <RefreshCw size={16} />, text: "תרגול עבודה על משטח עבודה ועל טיפס" },
        { icon: <Paintbrush size={16} />, text: "אחיזה במכחול ופיסול" },
        { icon: <X size={16} />, text: "הסרת ג'ל ישן ומניקור" },
        { icon: <Hand size={16} />, text: "לק ג'ל יד אחת" }
      ]
    },
    {
      number: 3,
      title: "טכניקות מתקדמות ופרנץ'",
      icon: <Palette className={styles.sessionIcon} />,
      topics: [
        { icon: <Target size={16} />, text: "מטרת השיוף" },
        { icon: <Bone size={16} />, text: "מבנה אנטומי" },
        { icon: <Palette size={16} />, text: "התאמת בייס" },
        { icon: <Palette size={16} />, text: "סוגי בייסים" },
        { icon: <BarChart3 size={16} />, text: "מבנה אנטומי 8 טיפס עם בייס בצבע" },
        { icon: <Flag size={16} />, text: "טכניקות לפרנץ'" },
        { icon: <Eye size={16} />, text: "השתקפויות ופרופילים" },
        { icon: <Paintbrush size={16} />, text: "פרנץ' ועבודה עם מכחול דק" }
      ]
    },
    {
      number: 4,
      title: "השלמות ותיקונים",
      icon: <Hammer className={styles.sessionIcon} />,
      topics: [
        { icon: <Wrench size={16} />, text: "השלמות ותיקון" },
        { icon: <Construction size={16} />, text: "סוגי הבניות הקיימים + הגדמות" },
        { icon: <Heart size={16} />, text: "טכניקה להשתלמות סדקים" },
        { icon: <FileText size={16} />, text: "ציפורן על טיפס" }
      ]
    }
  ];

  return <>
    <div className={styles.syllabusContainer}>
      {/* Header Drawer */}
      <div className={styles.headerSection}>
        <div className={styles.headerDrawer}>
          <div 
            className={styles.drawerHeader}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={styles.drawerContent}>
              <h1 className={styles.mainTitle}>
                קורס מתחילות - הסילבוס המלא
              </h1>
              <p className={styles.drawerDescription}>
                לחצי כאן כדי לפתוח את הסילבוס המלא
              </p>
            </div>
            <div className={styles.drawerToggle}>
              {isOpen ? (
                <Minus className={styles.toggleIcon} />
              ) : (
                <Plus className={styles.toggleIcon} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Content */}
      <div className={`${styles.collapsibleContent} ${isOpen ? styles.contentOpen : styles.contentClosed}`}>
        <div className={styles.sessionsGrid}>
          {sessions.map((session, index) => (
            <div 
              key={session.number} 
              className={`${styles.sessionCard} ${styles[`delay${index + 1}`]}`}
            >
              <div className={styles.sessionHeader}>
                <div className={styles.sessionNumber}>{session.number}</div>
          
                <h2 className={styles.sessionTitle}>{session.title}</h2>
              </div>
              
              <div className={styles.topicsContainer}>
                {session.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className={styles.topicItem}>
                    <span className={styles.topicIcon}>{topic.icon}</span>
                    <span className={styles.topicText}>{topic.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
            <Button text="סמדי, אני רוצה שנדבר!"/>
      </div>
     
    </div>
 
</>
};

export default ManicureSyllabus;