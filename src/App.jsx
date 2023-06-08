import { useLocation } from 'react-router-dom'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Navigation } from './router/Navigation'

function App() {


  return (
    <>
      <Nav />
      <Navigation />
      <Footer />
    </>
  )
}

export default App
