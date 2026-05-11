import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.star}>✸</span>
            <div>
              <div className={styles.name}>예술적인 소프트웨어</div>
              <div className={styles.tagline}>경희대학교 소프트웨어융합대학 × 예술디자인대학</div>
            </div>
          </div>
          <div className={styles.orgs}>
            <div className={styles.org}>
              <span className={styles.orgDot} style={{ background: 'var(--blue)' }} />
              <span>제 7대 소프트웨어융합대학 학생회 <strong>백야</strong></span>
            </div>
            <div className={styles.org}>
              <span className={styles.orgDot} style={{ background: 'var(--gold)' }} />
              <span>제 24대 예술디자인대학 학생회 <strong>디딤</strong></span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>© 2025 예술적인 소프트웨어. All rights reserved.</span>
          <span className={styles.motto}>"예술의 미학, 기술의 실현"</span>
        </div>
      </div>
    </footer>
  )
}
