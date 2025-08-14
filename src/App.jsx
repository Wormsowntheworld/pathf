import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// --- Error boundary to surface hidden runtime errors ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    // helpful in dev logs; ignored in production
    console.error('App crashed:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, color: 'crimson' }}>
          <h1>Something went wrong.</h1>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {String(this.state.error)}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

// --- Minimal test pages (no external component imports yet) ---
function HomePage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Pathfindars — Home</h1>
      <p>This is a minimal render test.</p>
      <nav style={{ marginTop: 12, display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/ourservices">Our Services</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  )
}

function ServicesPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Services</h1>
      <p>Minimal page to verify routing works.</p>
    </div>
  )
}

function BlogPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Blog</h1>
      <p>Minimal page to verify routing works.</p>
    </div>
  )
}

// IMPORTANT: With a custom domain and Vite's base set to '/', basename is optional.
// If you prefer, you can set basename={import.meta.env.BASE_URL}, but keep it simple first.
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ourservices" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}
