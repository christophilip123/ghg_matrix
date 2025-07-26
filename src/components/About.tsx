import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart2, Users, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const values = [
    {
      icon: <BarChart2 className="h-10 w-10 text-primary-500" />,
      title: 'Data-Driven',
      description: 'We believe in the power of accurate data to drive meaningful climate action.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: 'Collaborative',
      description: 'We work closely with our clients to understand their unique sustainability challenges.',
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-500" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of scientific integrity and transparency.',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary-500" />,
      title: 'Innovation',
      description: 'We constantly improve our methodologies and technologies to stay ahead.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">About GHG Matrix</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                At GHG Matrix, we're dedicated to empowering organizations with the tools and expertise needed to measure, manage, and reduce their greenhouse gas emissions effectively. Our mission is to accelerate the transition to a low-carbon economy through accurate data and actionable insights.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
              <p className="text-gray-700 mb-6">
                We combine cutting-edge technology with deep expertise in climate science and carbon accounting to deliver solutions that are both scientifically rigorous and practical for businesses. Our comprehensive approach covers the entire emissions management lifecycle, from measurement to reporting to reduction strategy.
              </p>
              <div className="flex items-center mt-8">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team member" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Dr. Emily Chen</p>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working on sustainability projects" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};