import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MentionsLegales from './pages/MentionsLegales'
import Error from './pages/Error'
import PolitiqueConfidentialite from './pages/PoltiqueConfidentialite'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Presentation from './pages/Presentation'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/a-propos' element={<Presentation />} />
        <Route path='/mentions-legales' element={<MentionsLegales />} />
        <Route path='/politique-de-confidentialite' element={<PolitiqueConfidentialite />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
