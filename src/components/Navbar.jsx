import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const FORM_ART = '/apply/art'
const FORM_SW  = '/apply/sw'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: '소개', href: '#about' },
    { label: '세부사항', href: '#details' },
    { label: '신청하기', href: '#apply' },
  ]

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoStar}>✸</span>
          <span className={styles.logoText}>예술적인 소프트웨어</span>
        </a>

        <nav className={styles.links}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </nav>

        <div className={styles.ctaGroup}>
          <a href={FORM_ART} target="_blank" rel="noopener noreferrer" className={`${styles.cta} ${styles.ctaArt}`}>
            예디대 신청
          </a>
          <a href={FORM_SW} target="_blank" rel="noopener noreferrer" className={`${styles.cta} ${styles.ctaSw}`}>
            소융대 신청
          </a>
        </div>

        <button className={styles.burger} onClick={() => setOpen(v => !v)} aria-label="메뉴">
          <span className={open ? styles.barOpen1 : styles.bar} />
          <span className={open ? styles.barOpen2 : styles.bar} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={FORM_ART} target="_blank" rel="noopener noreferrer" className={`${styles.mobileCta} ${styles.mobileCtaArt}`}
              onClick={() => setOpen(false)}>
              예디대 신청
            </a>
            <a href={FORM_SW} target="_blank" rel="noopener noreferrer" className={`${styles.mobileCta} ${styles.mobileCtaSw}`}
              onClick={() => setOpen(false)}>
              소융대 신청
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
