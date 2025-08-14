import React from 'react'
import { Users, Target, Zap } from 'lucide-react'
import collaborationIllustration from '../assets/collaboration-illustration.jpg'

const Collaboration = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-4 overflow-hidden">
              <img 
                src={collaborationIllustration} 
                alt="Team collaboration with puzzle pieces" 
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Walking the Talk as Experts for Profitable and Sustainable Businesses
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We listen, collaborate and walk the journey with you as equals to ensure profitability and sustainability in your business. We are always focused on delivering top notch business venturing experience - outfitting the project or venture with the appropriate resources to anticipate your needs and response - We know that operations and changes are dynamic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collaboration

