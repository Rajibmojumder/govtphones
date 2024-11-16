import React from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const rules = [
  {
    title: "One Benefit Per Household",
    description: "Only one Lifeline benefit is allowed per household. A household is defined as any individual or group of individuals who live together at the same address and share income and expenses."
  },
  {
    title: "Annual Recertification",
    description: "Subscribers must recertify their eligibility every year to continue receiving benefits. This ensures the program serves those who truly need it."
  },
  {
    title: "Active Usage Required",
    description: "Service must be used at least once every 30 days to remain active. This includes making a call, sending a text, or using data."
  }
];

const ProgramRulesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Program Rules</h2>
          <p className="text-xl text-gray-600">Important guidelines to maintain your benefits</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-primary-light/10 to-primary-dark/10 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <ExclamationTriangleIcon className="h-8 w-8 text-primary-dark mr-3" />
                <h3 className="text-xl font-semibold text-primary-dark">{rule.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramRulesSection;