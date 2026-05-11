import './App.css'
import Landing from './components/Landing'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <Landing />
      <Analytics />
    </>
  )
}

export default App
