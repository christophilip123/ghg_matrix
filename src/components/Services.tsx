import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, BarChart, LineChart, Users, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <FileCheck className="h-12 w-12 text-white" />,
      title: 'GHG Inventory Development',
      description: 'Comprehensive greenhouse gas inventories across Scope 1, 2, and 3 emissions following GHG Protocol standards.',
      color: 'bg-primary-500',
    },
    {
      icon: <BarChart className="h-12 w-12 text-white" />,
      title: 'Emissions Analytics',
      description: 'Advanced analytics to identify emission hotspots and prioritize reduction opportunities across your organization.',
      color: 'bg-secondary-500',
    },
    {
      icon: <LineChart className="h-12 w-12 text-white" />,
      title: 'Climate Strategy',
      description: 'Develop science-based targets and comprehensive strategies to reduce emissions and meet sustainability goals.',
      color: 'bg-accent-500',
    },
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: 'Reporting & Disclosure',
      description: 'Support for voluntary and mandatory climate disclosures to stakeholders, regulators, and reporting frameworks.',
      color: 'bg-secondary-700',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We provide comprehensive solutions for measuring, managing, and reducing greenhouse gas emissions across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className={`${service.color} p-6 flex justify-center`}>
                {service.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-primary-500 font-medium inline-flex items-center hover:text-primary-600 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Our Methodology</h3>
              <p className="text-gray-700 mb-4">
                Our approach is grounded in the GHG Protocol, the most widely used greenhouse gas accounting standard. We combine this framework with our proprietary technology to deliver accurate, comprehensive emissions data.
              </p>
              <div className="flex flex-col space-y-3">
                {[
                  'Boundary Setting & Scoping',
                  'Data Collection & Validation',
                  'Calculation & Analysis',
                  'Reporting & Verification',
                  'Strategy Development',
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-medium mr-3">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our methodology"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};