import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const GA_ID = 'G-BB8YRNS9DT'
const s = document.createElement('script')
s.async = true
s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
document.head.appendChild(s)
window.dataLayer = window.dataLayer || []
window.gtag = function () { window.dataLayer.push(arguments) }
window.gtag('js', new Date())
window.gtag('config', GA_ID)

const FORM_ART = '1FAIpQLSePZeC9d249YENLf-gaiHvCEHy0RpJV2JCsSM_AXsyzJjwizQ'
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href*="docs.google.com"]')
  if (!link) return
  const college = link.href.includes(FORM_ART) ? '예디대' : '소융대'
  window.gtag('event', 'apply_click', { college })
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
