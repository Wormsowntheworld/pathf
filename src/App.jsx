import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Services from './components/Services'
import Collaboration from './components/Collaboration'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ServicesTeam from './components/ServicesTeam'
import Blog from './components/Blog'
import './App.css'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Quote />
      <Services />
      <Collaboration />
      <CallToAction />
    </div>
  )
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ourservices" element={<ServicesTeam />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
