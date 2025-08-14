import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Linkedin, Youtube, Facebook } from 'lucide-react'
import logoPath from '../assets/logopath.png'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer id="contact" className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logoPath} alt="Pathfindars Logo" className="w-8 h-8 rounded" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Pathfindars Group</h3>
                <p className="text-xs text-gray-700">Venture. Finance. Overseas Markets.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-900">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-gray-700 mt-0.5" />
                  <div className="text-gray-900">
                    <p>1 North Bridge Rd, #08</p>
                    <p>High Street Centre,</p>
                    <p>Singapore 179094</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-700" />
                  <div>
                    <p className="text-gray-900">Inquiry:</p>
                    <a href="mailto:info@pathfindars.com" className="text-gray-900 hover:underline">
                      info@pathfindars.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gray-700" />
                  <div>
                    <p className="text-gray-900">General Enquiries:</p>
                    <a href="tel:+6597843884" className="text-gray-900 hover:underline">
                      +65 9784 3884
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-900 hover:underline">Terms &amp; Conditions</a>
              <a href="#" className="block text-gray-900 hover:underline">Privacy Policy</a>
            </div>
          </div>

          {/* Newsletter and Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900">Follow</h4>
            <p className="text-gray-900">Sign up to get the latest news on our product.</p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2">
                Subscribe
              </Button>
              {subscribed && <p className="text-green-700 text-sm">Thanks for subscribing!</p>}
            </form>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center hover:bg-blue-900 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <p className="text-center text-gray-900">© {new Date().getFullYear()} Pathfindars Group</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
