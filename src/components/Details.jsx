import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Details.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const timeline = [
  { phase: '01', label: '킥오프 & 팀 빌딩', desc: '팀 구성, 아이디어 브레인스토밍, 방향성 설정', color: 'gold' },
  { phase: '02', label: '기획 & 설계', desc: '프로젝트 기획, 디자인 시스템 구성, 개발 설계', color: 'both' },
  { phase: '03', label: '개발 & 디자인', desc: '3개월간 집중 개발 및 디자인 협업', color: 'blue' },
  { phase: '04', label: '전시 & 발표', desc: '부스 형태 전시, 결과물 발표, 시상', color: 'gold' },
]

const eligibility = [
  { icon: '🏫', text: '경희대학교 소프트웨어융합대학 재학생' },
  { icon: '🎭', text: '경희대학교 예술디자인대학 재학생' },
  { icon: '👥', text: '개발자 + 디자이너 혼합 팀 구성 (팀당 4-6인)' },
  { icon: '💡', text: '창의적 아이디어와 협업 의지를 가진 분' },
]

const faq = [
  { q: '팀은 어떻게 구성되나요?', a: '소프트웨어융합대학생과 예술디자인대학생이 혼합된 팀으로 구성됩니다. 신청 시 팀 구성 여부를 선택할 수 있습니다.' },
  { q: '프로젝트 주제는 자유인가요?', a: '네, 팀에서 자유롭게 주제를 선택할 수 있습니다. 단, 기술과 예술이 융합된 결과물을 지향합니다.' },
  { q: '기간 동안 지원이 있나요?', a: '멘토링, 작업 공간 제공, 필요 시 물품 지원 등 학생회 차원의 지원이 계획되어 있습니다.' },
]

export default function Details() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="details" className={styles.section} ref={ref}>
      <div className={styles.inner}>

        {/* 타임라인 */}
        <motion.p className={styles.label} custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          ✸ TIMELINE
        </motion.p>
        <motion.h2 className={styles.heading} custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          프로젝트 일정
        </motion.h2>

        <div className={styles.timeline}>
          {timeline.map((t, i) => (
            <motion.div
              key={t.phase}
              className={styles.timelineItem}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className={`${styles.timelineNum} ${styles[t.color]}`}>{t.phase}</div>
              <div className={styles.timelineBody}>
                <div className={styles.timelineLabel}>{t.label}</div>
                <div className={styles.timelineDesc}>{t.desc}</div>
              </div>
              {i < timeline.length - 1 && <div className={styles.timelineLine} />}
            </motion.div>
          ))}
        </div>

        <div className={styles.divider} />

        {/* 참가 자격 */}
        <motion.p className={styles.label} custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          ✸ ELIGIBILITY
        </motion.p>
        <motion.h2 className={styles.heading} custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          참가 자격
        </motion.h2>

        <div className={styles.eligGrid}>
          {eligibility.map((e, i) => (
            <motion.div
              key={i}
              className={styles.eligCard}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <span className={styles.eligIcon}>{e.icon}</span>
              <span className={styles.eligText}>{e.text}</span>
            </motion.div>
          ))}
        </div>

        <div className={styles.divider} />

        {/* FAQ */}
        <motion.p className={styles.label} custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          ✸ FAQ
        </motion.p>
        <motion.h2 className={styles.heading} custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          자주 묻는 질문
        </motion.h2>

        <div className={styles.faqList}>
          {faq.map((f, i) => (
            <motion.div
              key={i}
              className={styles.faqItem}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className={styles.faqQ}>
                <span className={styles.faqIcon}>Q</span>
                {f.q}
              </div>
              <div className={styles.faqA}>{f.a}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
