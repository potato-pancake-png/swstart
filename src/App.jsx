import { useEffect } from 'react'
import './App.css'
import Landing from './components/Landing'
import { Analytics } from '@vercel/analytics/react'

const FORM_ART = 'https://docs.google.com/forms/d/e/1FAIpQLSePZeC9d249YENLf-gaiHvCEHy0RpJV2JCsSM_AXsyzJjwizQ/viewform'
const FORM_SW  = 'https://docs.google.com/forms/d/e/1FAIpQLSdM_IISf9i1TlP2vSwuovPOFQwE0w2aXVQTFfN2LH5AO03gRQ/viewform'

const REDIRECTS = {
  '/apply/art': FORM_ART,
  '/apply/sw':  FORM_SW,
}

function App() {
  const dest = REDIRECTS[window.location.pathname]

  useEffect(() => {
    if (dest) window.location.replace(dest)
  }, [dest])

  return (
    <>
      {!dest && <Landing />}
      <Analytics />
    </>
  )
}

export default App
