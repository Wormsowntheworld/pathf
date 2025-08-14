import React from 'react'
import { Button } from '@/components/ui/button'
import { Shield, Globe, Calculator } from 'lucide-react'
import heroIllustration from '../assets/hero-illustration.jpg'

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                New Venture.<br />
                Finance.<br />
                <span className="text-blue-600">Overseas Markets</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Pathfindars is the venture structuring and finance experts that you can trust.
              </p>
            </div>

            <Button
              className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-3 text-lg"
              onClick={() => scrollTo('offerings')}
            >
              Learn more
            </Button>

            {/* Feature Icons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Speed &amp;</p>
                  <p className="font-semibold text-gray-900">Security</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Overseas</p>
                  <p className="font-semibold text-gray-900">Consulting</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Financial</p>
                  <p className="font-semibold text-gray-900">Modelling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 rounded-3xl p-4 overflow-hidden">
              <img
                src={heroIllustration}
                alt="Modern business collaboration illustration"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
