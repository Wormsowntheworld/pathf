import React from 'react'

const Quote = () => {
  return (
    <section className="bg-yellow-400 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Quote */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              "Chance Favors the Prepared."
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              We are with you in getting prepared - for the future.
            </h3>
          </div>

          {/* Right Content - Description */}
          <div className="space-y-6 text-gray-900">
            <p className="text-lg leading-relaxed">
              Regardless of your company size, industry or stage of growth, Pathfindars will listen to the unique challenges of your business.
            </p>
            <p className="text-lg leading-relaxed">
              We work hand-in-hand with you to build robust processes and finance functions, so that we can formulate proven strategies to better manage your cashflow, maximise profits and supercharge your growth.
            </p>
            <p className="text-lg leading-relaxed">
              Expansion beyond your current markets to overseas such as Indonesia, Vietnam, Malaysia or even the Middle East - all while tapping onto the best financial and structural options available.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond overcoming short term challenges, we also help you transform the way you look at business management to set you on the trajectory of sustainable long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote

