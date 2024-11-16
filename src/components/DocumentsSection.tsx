import React from 'react';
import { motion } from 'framer-motion';
import { DocumentTextIcon, UserIcon, HomeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const documents = [
  {
    icon: UserIcon,
    title: 'Identity Verification',
    items: ['Government-issued photo ID', 'Social Security card', 'Birth certificate']
  },
  {
    icon: HomeIcon,
    title: 'Proof of Address',
    items: ['Utility bill', 'Lease agreement', 'Mortgage statement']
  },
  {
    icon: DocumentTextIcon,
    title: 'Program Participation',
    items: ['Benefits award letter', 'Program participation card', 'Official program documents']
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Income Verification',
    items: ['Pay stubs', 'Tax returns', 'Social Security benefits statement']
  }
];

const DocumentsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Documents Required</h2>
          <p className="text-xl text-gray-200">Prepare these documents for your application</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
              >
                <Icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">{doc.title}</h3>
                <ul className="space-y-2">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="text-gray-200 flex items-center">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;