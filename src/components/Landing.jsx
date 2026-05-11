import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Landing.module.css'

const FORM_ART = 'https://docs.google.com/forms/d/e/1FAIpQLSePZeC9d249YENLf-gaiHvCEHy0RpJV2JCsSM_AXsyzJjwizQ/viewform'
const FORM_SW  = 'https://docs.google.com/forms/d/e/1FAIpQLSdM_IISf9i1TlP2vSwuovPOFQwE0w2aXVQTFfN2LH5AO03gRQ/viewform'

export default function Landing() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className={styles.page}>

      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className={styles.star}>✸</span>
        <span className={styles.headerTitle}>예술적인 소프트웨어</span>
        <span className={styles.star}>✸</span>
      </motion.header>

      <main className={styles.main}>

        <motion.p
          className={styles.centerLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          소속 단과대를 선택하세요
        </motion.p>

        <div className={styles.panels}>

          {/* 예술디자인대학 */}
          <motion.a
            href={FORM_ART}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.panel} ${styles.panelArt}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered('art')}
            onMouseLeave={() => setHovered(null)}
            data-dim={hovered === 'sw'}
          >
            <div className={styles.panelGlow} style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.2) 0%, transparent 70%)' }} />

            <div className={styles.panelContent}>
              <div className={styles.panelOrg}>예술디자인대학</div>
              <div className={styles.panelCta}>
                <span>신청하기</span>
                <motion.span
                  animate={{ x: hovered === 'art' ? 6 : 0 }}
                  transition={{ duration: 0.2 }}
                >→</motion.span>
              </div>
            </div>

            <AnimatePresence>
              {hovered === 'art' && (
                <motion.div
                  className={styles.panelOverlay}
                  style={{ background: 'rgba(201,168,76,0.06)' }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>

            <div className={styles.panelAccent} style={{ background: 'var(--gold)' }} />
          </motion.a>

          {/* 소프트웨어융합대학 */}
          <motion.a
            href={FORM_SW}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.panel} ${styles.panelSw}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered('sw')}
            onMouseLeave={() => setHovered(null)}
            data-dim={hovered === 'art'}
          >
            <div className={styles.panelGlow} style={{ background: 'radial-gradient(ellipse at center, rgba(74,158,255,0.16) 0%, transparent 70%)' }} />

            <div className={styles.panelContent}>
              <div className={styles.panelOrg} style={{ color: 'var(--blue)' }}>소프트웨어융합대학</div>
              <div className={styles.panelCta} style={{ background: 'var(--blue)' }}>
                <span>신청하기</span>
                <motion.span
                  animate={{ x: hovered === 'sw' ? 6 : 0 }}
                  transition={{ duration: 0.2 }}
                >→</motion.span>
              </div>
            </div>

            <AnimatePresence>
              {hovered === 'sw' && (
                <motion.div
                  className={styles.panelOverlay}
                  style={{ background: 'rgba(74,158,255,0.05)' }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>

            <div className={styles.panelAccent} style={{ background: 'var(--blue)' }} />
          </motion.a>

        </div>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          "예술의 미학, 기술의 실현" — 약 5개월간의 협업 개발 · 디자인 프로젝트
        </motion.p>
      </main>
    </div>
  )
}
