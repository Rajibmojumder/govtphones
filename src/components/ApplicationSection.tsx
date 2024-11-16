import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const steps = [
  { 
    title: 'Using the online Lifeline National Verifier',
    description: 'Complete your application through the National Verifier portal. This is the fastest way to check your eligibility and apply.',
    icon: GlobeAltIcon,
    button: {
      text: 'Apply Online',
      link: 'https://www.lifelinesupport.org/',
      primary: true
    }
  },
  { 
    title: 'Contacting a participating Lifeline service provider',
    description: 'Reach out directly to a Lifeline provider in your area who can assist with your application.',
    icon: PhoneIcon,
    button: {
      text: 'Find Providers',
      link: 'https://www.lifelinesupport.org/companies-near-me/',
      primary: true
    }
  },
  { 
    title: 'Submitting a paper application by mail',
    description: 'Download and complete the Lifeline application form, then mail it with your supporting documents.',
    icon: ArrowDownTrayIcon,
    button: {
      text: 'Download Form',
      link: 'https://www.lifelinesupport.org/wp-content/uploads/documents/get-lifeline/LI_Application_NVstates.pdf',
      primary: true
    }
  }
];

const ApplicationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-light to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Easy Application Process</h2>
          <p className="text-xl text-gray-200">Choose your preferred way to apply</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <step.icon className="h-12 w-12 text-primary-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">{step.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{step.description}</p>
              <div className="flex justify-center">
                <motion.a
                  href={step.button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    step.button.primary
                      ? 'bg-gradient-to-r from-primary-light to-primary-dark text-white hover:shadow-lg'
                      : 'bg-gray-100 text-primary-dark hover:bg-gray-200'
                  }`}
                >
                  {step.button.text}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;