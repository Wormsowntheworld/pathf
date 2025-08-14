import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoPath from '../assets/logopath.png'

const Header = () => {
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Go to home first (anchor will still be in URL, so browser will scroll)
      window.location.href = `/#${sectionId}`
    } else {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoPath} alt="Pathfindars Logo" className="w-8 h-8 rounded" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Pathfindars Group</h1>
              <p className="text-xs text-gray-600">Venture. Finance. Overseas Markets</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="px-2 py-2 text-gray-900 font-medium hover:border-b-2 hover:border-black transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/ourservices"
              className="px-2 py-2 text-gray-900 font-medium hover:border-b-2 hover:border-black transition-all duration-200"
            >
              Services &amp; Team
            </Link>
            <button
              onClick={() => scrollToSection('offerings')}
              className="px-2 py-2 text-gray-900 font-medium hover:border-b-2 hover:border-black transition-all duration-200"
              type="button"
            >
              Offerings
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-2 py-2 text-gray-900 font-medium hover:border-b-2 hover:border-black transition-all duration-200"
              type="button"
            >
              Contact
            </button>
            <Link
              to="/blog"
              className="px-2 py-2 text-gray-900 font-medium hover:border-b-2 hover:border-black transition-all duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile menu button (placeholder) */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900" type="button" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
