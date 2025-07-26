import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Film, ArrowRight } from 'lucide-react';

export const Resources: React.FC = () => {
  const resources = [
    {
      type: 'White Paper',
      title: 'The Complete Guide to Scope 3 Emissions',
      description: 'Learn how to effectively measure and manage your value chain emissions.',
      icon: <FileText className="h-6 w-6" />,
      date: 'Apr 2024',
    },
    {
      type: 'Case Study',
      title: 'How Manufacturing Companies Reduce Emissions',
      description: 'Real-world examples of successful GHG reduction strategies in manufacturing.',
      icon: <BookOpen className="h-6 w-6" />,
      date: 'Mar 2024',
    },
    {
      type: 'Webinar',
      title: 'Navigating Carbon Markets and Offsets',
      description: 'Understanding the role of carbon markets in your climate strategy.',
      icon: <Film className="h-6 w-6" />,
      date: 'Feb 2024',
    },
  ];

  const articles = [
    {
      title: 'Understanding the EU Corporate Sustainability Reporting Directive',
      description: 'What companies need to know about the new CSRD requirements.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'Mar 28, 2024',
    },
    {
      title: 'The Rise of Science-Based Targets',
      description: 'Why more companies are adopting science-based targets for emissions reduction.',
      image: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'Mar 15, 2024',
    },
    {
      title: 'Best Practices for GHG Data Collection',
      description: 'Strategies for collecting accurate and comprehensive emissions data.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'Feb 22, 2024',
    },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Resources</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our latest insights, guides, and tools to help you on your sustainability journey.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-6">Featured Resources</h3>
            <div className="space-y-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-md shadow-sm">
                      {resource.icon}
                    </div>
                    <div className="ml-4">
                      <span className="text-sm text-primary-500 font-medium">{resource.type}</span>
                      <h4 className="font-semibold mb-2">{resource.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{resource.date}</span>
                        <button className="text-primary-500 hover:text-primary-600 transition-colors">
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <a 
                href="#" 
                className="text-primary-500 font-medium inline-flex items-center hover:text-primary-600 transition-colors"
              >
                View all resources <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-6">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <h4 className="font-semibold mb-2 mt-1">{article.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                    <a 
                      href="#" 
                      className="text-primary-500 text-sm font-medium inline-flex items-center hover:text-primary-600 transition-colors"
                    >
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-600 p-8 rounded-lg text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest insights and resources.</p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
                />
                <button className="bg-accent-500 hover:bg-accent-600 transition-colors px-4 py-2 rounded-r-md font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};