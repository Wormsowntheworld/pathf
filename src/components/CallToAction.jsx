import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import growthIllustration from '../assets/growth-illustration.jpg'

const CallToAction = () => {
  const handleLearnMore = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleStartupValuation = () => {
    // This could link to a contact form or external service
    window.open('mailto:info@pathfindars.com?subject=Startup Valuation Inquiry', '_blank')
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Get Ready to Maximize Your Business Sustainability with Pathfindars
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={handleLearnMore}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={handleStartupValuation}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 text-lg font-semibold"
          >
            <Star className="mr-2 w-5 h-5" />
            Startup Valuation
          </Button>
        </div>

        {/* Illustration */}
        <div className="relative">
          <div className="bg-gradient-to-r from-yellow-100 via-green-100 to-blue-100 rounded-3xl p-4 overflow-hidden">
            <img 
              src={growthIllustration} 
              alt="Startup business growth and innovation" 
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

