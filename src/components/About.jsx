import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.inner}>
        <motion.p className={styles.label} custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          ✸ ABOUT
        </motion.p>

        <motion.h2 className={styles.heading} custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          예술적인 소프트웨어란?
        </motion.h2>

        <motion.p className={styles.body} custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          경희대학교 소프트웨어융합대학과 예술디자인대학이 함께 주관하는 융합형 장기 프로젝트입니다.
          참가자들은 약 <strong>5개월간</strong> 개발과 디자인을 협업하여 결과물을 만들고,
          이를 부스 형태로 전시·발표합니다.
        </motion.p>

        <div className={styles.cards}>
          <motion.div className={`${styles.card} ${styles.art}`} custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <div className={styles.cardTop}>
              <span className={styles.dot} style={{ background: 'var(--gold)' }} />
              <span className={styles.cardTitle}>예술디자인대학 <strong>디딤</strong></span>
            </div>
            <p className={styles.cardDesc}>디자이너와 예술가들이 시각적 언어와 사용자 경험을 설계합니다. 창의적 상상력이 프로젝트의 방향을 이끕니다.</p>
          </motion.div>

          <motion.div className={`${styles.card} ${styles.sw}`} custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <div className={styles.cardTop}>
              <span className={styles.dot} style={{ background: 'var(--blue)' }} />
              <span className={styles.cardTitle}>소프트웨어융합대학 <strong>백야</strong></span>
            </div>
            <p className={styles.cardDesc}>개발자들이 기술로 아이디어를 현실로 구현합니다. 최신 기술 스택으로 예술을 살아있게 만듭니다.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
