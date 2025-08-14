import React from 'react'
import { Workflow, TrendingUp, Globe2, Settings } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, bgColor, iconBg }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 h-full`}>
      <div className="space-y-4">
        {/* Icon */}
        <div className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Biz Workflow that works",
      description: "Business processes are complex, we get that. Let us deal with the complexity and provide you with the workflows and SOPs that clearer and simpler for sustainable operations.",
      bgColor: "bg-green-100",
      iconBg: "bg-green-600"
    },
    {
      icon: TrendingUp,
      title: "Valuation & Financial Modelling",
      description: "Financial Modelling is not about your past results and accounts - it is building upon the foundation of future planning. We specialize in Start-up Valuation partnering and helped Startups to pursue their dreams.",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-600"
    },
    {
      icon: Globe2,
      title: "Overseas Expansion",
      description: "We understand the importance of creating visibility and growth in the International Markets. We have over 10 years of experience in overseas expansion - from ASEAN to Middle East - alongside our partners to foster deeper penetration to new markets through local partnerships and finding the right resource.",
      bgColor: "bg-yellow-100",
      iconBg: "bg-yellow-600"
    },
    {
      icon: Settings,
      title: "Process ReDesign and Engineering",
      description: "We have the tech expertise and tools to enable you to supercharge your process optimization.",
      bgColor: "bg-pink-100",
      iconBg: "bg-pink-600"
    }
  ]

  return (
    <section id="offerings" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What we offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer more than just consulting services. We offer a listening ear to your vision and plans as well as an open mind to create the future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
              iconBg={service.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

