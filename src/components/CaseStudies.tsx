import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Factory, Building, Truck } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      icon: <Building2 className="h-10 w-10 text-primary-500" />,
      title: 'Financial Services',
      company: 'Global Bank Corp',
      description: 'Reduced Scope 1 & 2 emissions by 35% within 2 years through energy efficiency and renewable energy procurement.',
      result: '35% reduction',
      bgImage: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: <Factory className="h-10 w-10 text-primary-500" />,
      title: 'Manufacturing',
      company: 'Precision Industries',
      description: 'Mapped Scope 3 emissions across the value chain, identifying hotspots and implementing supplier engagement program.',
      result: '22% reduction',
      bgImage: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: <Building className="h-10 w-10 text-primary-500" />,
      title: 'Real Estate',
      company: 'EcoSpace Properties',
      description: 'Developed portfolio-wide emissions baseline and energy efficiency roadmap for 150+ commercial buildings.',
      result: '28% reduction',
      bgImage: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: <Truck className="h-10 w-10 text-primary-500" />,
      title: 'Logistics',
      company: 'FastFreight Logistics',
      description: 'Implemented route optimization and fleet electrification strategy to reduce transportation emissions.',
      result: '40% reduction',
      bgImage: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            See how organizations across industries are using GHG Matrix to achieve their sustainability goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${study.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative p-8 text-white h-full flex flex-col">
                <div className="bg-white/10 p-3 rounded-full w-fit mb-4">{study.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{study.title}</h3>
                <p className="text-primary-100 mb-4">{study.company}</p>
                <p className="mb-4">{study.description}</p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-100 font-medium">Result: {study.result}</span>
                    <button className="text-white hover:text-primary-100 transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Client Testimonial</h3>
              <blockquote className="text-gray-700 italic mb-4">
                "GHG Matrix provided us with unprecedented visibility into our emissions across our global operations. Their platform not only helped us accurately measure our carbon footprint but also identified clear pathways for reduction. We've already reduced our emissions by 30% and are on track to meet our 2030 goals."
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Chief Sustainability Officer, Global Bank Corp</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Results At A Glance</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Emission Reduction</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <p className="text-right text-sm">35%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cost Savings</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary-500 h-2.5 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    <p className="text-right text-sm">$4.2M</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Implementation Time</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-right text-sm">6 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};