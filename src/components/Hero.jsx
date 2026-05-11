import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const FORM_ART = 'https://forms.gle/여기에예디대링크'
const FORM_SW  = 'https://forms.gle/여기에소융대링크'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />

      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ✸ 경희대학교 융합형 장기 프로젝트 ✸
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          예술적인<br />소프트웨어
        </motion.h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          "예술의 미학, 기술의 실현"<br />
          소프트웨어융합대학 × 예술디자인대학이 함께하는<br />
          약 <strong>5개월간</strong>의 개발 · 디자인 협업 프로젝트
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <a href={FORM_ART} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnArt}`}>
            <span className={styles.btnLabel}>예술디자인대학</span>
            <span className={styles.btnSub}>신청하기 →</span>
          </a>
          <a href={FORM_SW} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSw}`}>
            <span className={styles.btnLabel}>소프트웨어융합대학</span>
            <span className={styles.btnSub}>신청하기 →</span>
          </a>
        </motion.div>

        <motion.p
          className={styles.orgs}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          제7대 소프트웨어융합대학 학생회 <strong>백야</strong>&ensp;×&ensp;제24대 예술디자인대학 학생회 <strong>디딤</strong>
        </motion.p>
      </div>
    </section>
  )
}
