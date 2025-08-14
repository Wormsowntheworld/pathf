import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Blog
              </h1>
              <p className="text-xl text-gray-600">
                Insights and updates from Pathfindars Group
              </p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Empty State */}
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Check back soon
              </h2>
              <p className="text-gray-600 mb-8">
                Once posts are published, you'll see them here.
              </p>
              
              {/* Sample Blog Post Preview (commented out for now) */}
              {/* 
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-left shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Dec 15, 2023</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sample Blog Post Title
                </h3>
                <p className="text-gray-600 mb-4">
                  This is a preview of what blog posts will look like when they are published...
                </p>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

