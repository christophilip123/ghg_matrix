import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

export const DataVisualization: React.FC = () => {
  // Sample data for visualization
  const emissionsByYear = [
    { year: '2019', emissions: 1200 },
    { year: '2020', emissions: 1100 },
    { year: '2021', emissions: 950 },
    { year: '2022', emissions: 800 },
    { year: '2023', emissions: 650 },
  ];

  const emissionsBySource = [
    { name: 'Energy', value: 45 },
    { name: 'Transportation', value: 30 },
    { name: 'Manufacturing', value: 15 },
    { name: 'Other', value: 10 },
  ];

  const reductionProgress = [
    { month: 'Jan', baseline: 100, actual: 100 },
    { month: 'Feb', baseline: 100, actual: 98 },
    { month: 'Mar', baseline: 100, actual: 95 },
    { month: 'Apr', baseline: 100, actual: 93 },
    { month: 'May', baseline: 100, actual: 90 },
    { month: 'Jun', baseline: 100, actual: 86 },
    { month: 'Jul', baseline: 100, actual: 82 },
    { month: 'Aug', baseline: 100, actual: 78 },
    { month: 'Sep', baseline: 100, actual: 75 },
    { month: 'Oct', baseline: 100, actual: 72 },
    { month: 'Nov', baseline: 100, actual: 68 },
    { month: 'Dec', baseline: 100, actual: 65 },
  ];

  const COLORS = ['#2D8B61', '#1A5F7A', '#FF9800', '#607D8B'];

  return (
    <section id="data-visualization" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Data-Driven Insights</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our platform transforms complex emissions data into clear, actionable insights to drive your climate strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Emissions Trend</h3>
            <p className="text-gray-600 mb-6">Track your organization's emissions over time to measure progress.</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={emissionsByYear}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="emissions" name="CO2e (tons)" fill="#2D8B61" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Emissions by Source</h3>
            <p className="text-gray-600 mb-6">Understand the distribution of your emissions across different categories.</p>
            <div className="h-80 flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emissionsBySource}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {emissionsBySource.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Reduction Progress</h3>
          <p className="text-gray-600 mb-6">Track your progress against your emissions reduction targets.</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={reductionProgress}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="baseline" name="Baseline" stroke="#8884d8" />
                <Line type="monotone" dataKey="actual" name="Actual Emissions" stroke="#2D8B61" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Our platform provides customized visualizations and reports to meet your specific needs.
          </p>
          <a 
            href="#contact" 
            className="btn px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors inline-flex items-center justify-center font-medium"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
};