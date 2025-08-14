import React from 'react'
import { Workflow, TrendingUp, Globe2, Settings } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, bgColor, iconBg }) => (
  <div className={`${bgColor} rounded-2xl p-6 h-full`}>
    <div className="space-y-4">
      <div className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
)

const Services = () => {
  const items = [
    {
      icon: Workflow,
      title: 'Biz Workflow that works',
      description:
        'Business processes are complex—we get that. We design SOPs that are clearer and simpler for sustainable operations.',
      bgColor: 'bg-green-100',
      iconBg: 'bg-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Valuation & Financial Modelling',
      description:
        'Financial modelling is about decisions—not just the past. We’ve led fundraising, valuation partnering, and helped startups pursue their dreams.',
      bgColor: 'bg-blue-100',
      iconBg: 'bg-blue-600',
    },
    {
      icon: Globe2,
      title: 'Overseas Expansion',
      description:
        '10+ years helping companies expand into international markets through local partnerships and the right resources.',
      bgColor: 'bg-yellow-100',
      iconBg: 'bg-yellow-600',
    },
    {
      icon: Settings,
      title: 'Process Re-Design & Engineering',
      description:
        'We use the right tech and tools to supercharge your process optimization.',
      bgColor: 'bg-pink-100',
      iconBg: 'bg-pink-600',
    },
  ]

  return (
    <section id="offerings" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What we offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than consulting. We help turn your vision into a plan—and create the future with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((svc, i) => (
            <ServiceCard key={i} {...svc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
