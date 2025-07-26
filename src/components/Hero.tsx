import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pattern opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight mb-6">
              Measure, Manage, and Reduce Your 
              <span className="text-primary-500"> Carbon Footprint</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              GHG Matrix provides innovative solutions for greenhouse gas measurement, reporting, and verification to help organizations achieve their sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors inline-flex items-center justify-center font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#about" 
                className="btn px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-md hover:border-primary-500 hover:text-primary-500 transition-colors inline-flex items-center justify-center font-medium"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/2023 ESG Report Cover-jpeg (1).jpeg" 
              alt="Sustainable journey - winding road through green landscape"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            {
              title: 'Scope Coverage',
              description: 'Comprehensive emissions tracking across all scopes with industry-leading accuracy',
              metric: '90%'
            },
            {
              title: 'Manhours Reduction',
              description: 'Automated data collection and analysis saves significant time annually',
              metric: '8000+'
            },
            {
              title: 'Compliance Ready',
              description: 'Fully aligned with all major climate regulations and reporting frameworks',
              metric: '100%'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">{feature.metric}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Comprehensive ESG Framework
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our platform addresses all aspects of Environmental, Social, and Governance factors to provide 
              a holistic view of your organization's sustainability performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Environment */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-600 ml-3">Environment</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Climate change strategy and carbon emissions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Air and water pollution
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Water efficiency
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Energy efficiency
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Waste management
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Chemical management
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Land rehabilitation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Renewables
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full">
                  <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-600 ml-3">Social</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Health and safety
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Human rights
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Customer satisfaction
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Data protection and privacy
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Gender and diversity
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Employee engagement
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Community relations
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Child labour
                </li>
              </ul>
            </div>
            {/* Governance */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-cyan-500">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-100 p-3 rounded-full">
                  <svg className="h-8 w-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-cyan-600 ml-3">Governance</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Business ethics
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Compliance
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Board composition
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Audit committee structure
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Bribery and corruption
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Executive compensation
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Lobbying
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Political contributions
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Whistleblower schemes
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};