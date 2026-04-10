import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'
import Error from './pages/Error.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'


function App() {
  return (
    <Router>
      <div className="main-layout">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  )
}

export default App