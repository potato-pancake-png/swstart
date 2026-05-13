import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { track } from '@vercel/analytics'
import styles from './Apply.module.css'

const FORM_ART = 'https://docs.google.com/forms/d/e/1FAIpQLSePZeC9d249YENLf-gaiHvCEHy0RpJV2JCsSM_AXsyzJjwizQ/viewform'
const FORM_SW  = 'https://docs.google.com/forms/d/e/1FAIpQLSdM_IISf9i1TlP2vSwuovPOFQwE0w2aXVQTFfN2LH5AO03gRQ/viewform'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Apply() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="apply" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <motion.p className={styles.label} custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          ✸ APPLY
        </motion.p>

        <motion.h2 className={styles.heading} custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          신청하기
        </motion.h2>

        <motion.p className={styles.sub} custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          소속 단과대 신청서를 작성해 주세요.<br />
          마감 전에 제출해 주시기 바랍니다.
        </motion.p>

        <motion.div className={styles.cards} custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <a href={FORM_ART} target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.art}`}
            onClick={() => track('apply_click', { college: '예디대' })}>
            <div className={styles.cardHeader}>
              <span className={styles.badge} style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)' }}>예술디자인대학</span>
              <span className={styles.arrow}>→</span>
            </div>
            <div className={styles.cardName}>디딤</div>
            <div className={styles.cardAction}>신청서 작성하기 (Google Form)</div>
          </a>

          <a href={FORM_SW} target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.sw}`}
            onClick={() => track('apply_click', { college: '소융대' })}>
            <div className={styles.cardHeader}>
              <span className={styles.badge} style={{ background: 'rgba(74,158,255,0.12)', color: 'var(--blue)', border: '1px solid rgba(74,158,255,0.3)' }}>소프트웨어융합대학</span>
              <span className={styles.arrow}>→</span>
            </div>
            <div className={styles.cardName}>백야</div>
            <div className={styles.cardAction}>신청서 작성하기 (Google Form)</div>
          </a>
        </motion.div>

        <motion.p className={styles.note} custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          신청 관련 문의는 각 학생회 SNS를 통해 문의해 주세요.
        </motion.p>
      </div>
    </section>
  )
}
