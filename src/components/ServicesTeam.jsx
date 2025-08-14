import React from 'react'
import { TrendingUp, Globe, Users, Award } from 'lucide-react'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.jpg'

const ServicesTeam = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services & Team
          </h1>
          <p className="text-xl text-gray-600">
            Financial Management & Market Expansion Specialists
          </p>
        </div>
      </section>

      {/* Financial Management Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Team Photo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                <img 
                  src={photo1} 
                  alt="Professional business team member" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Financial Management
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you are venturing into a new business or optimizing existing businesses for financial growth through financial and business strategies and structuring, we are here to take you to the next level. Our experienced teams have optimized, assisted in fundraising and performed over impact across over $200M of projects and companies.
              </p>
              
              {/* Stats */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$200M+</p>
                    <p className="text-sm text-gray-600">Projects Value</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">Expert</p>
                    <p className="text-sm text-gray-600">Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overseas Markets Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Overseas Markets
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If you are venturing into a new business market and require understanding of the market space and industry standards, or even just a simple professional and detailed sense check of the market - Pathfindars will be able to walk the journey with you. We will maximize your expansion growth plans with our extensive business networks and knowledge of latest market trends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have successfully landed clients with boots on the ground in Indonesia Malaysia, Philippines, Vietnam and expanding our network to new territories - hit us up to find out more.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Helped over 100 companies to these new markets and grown foothold in complex environments there.
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100+</p>
                    <p className="text-sm text-gray-600">Companies Helped</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Photo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-purple-300 rounded-2xl overflow-hidden">
                <img 
                  src={photo2} 
                  alt="International markets expert team member" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesTeam

