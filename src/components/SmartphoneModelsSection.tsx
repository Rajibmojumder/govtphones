import React from 'react';
import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const brands = [
  {
    name: 'Apple',
    isIphone: true,
    models: [
      'iPhone SE (2nd gen)',
      'iPhone 6s Plus',
      'iPhone 7s Plus',
      'iPhone 8',
      'iPhone XR',
      'iPhone X',
      'iPhone 11',
      'iPhone 12',
      'iPhone 13'
    ]
  },
  {
    name: 'Samsung',
    isIphone: false,
    models: [
      'Galaxy S9',
      'Galaxy A13 5G',
      'Galaxy A32 5G',
      'Galaxy A53 5G',
      'Galaxy A14',
      'Galaxy A03s',
      'Galaxy S22',
      'Galaxy Z Fold & Flip',
      'Galaxy Note'
    ]
  },
  {
    name: 'Motorola',
    isIphone: false,
    models: [
      'Moto G Power',
      'Moto G Pure',
      'Moto G Play',
      'Moto E',
      'Moto G Stylus',
      'Moto Z4',
      'Moto Edge'
    ]
  },
  {
    name: 'Nokia',
    isIphone: false,
    models: [
      'Nokia G400',
      'Nokia G100',
      'Nokia C100',
      'Nokia C200',
      'Nokia G50'
    ]
  },
  {
    name: 'OnePlus',
    isIphone: false,
    models: [
      'OnePlus Nord N200',
      'OnePlus Nord N300',
      'OnePlus Nord N20',
      'OnePlus Nord N100',
      'OnePlus Nord N10'
    ]
  },
  {
    name: 'Google Pixel',
    isIphone: false,
    models: [
      'Pixel 6a',
      'Pixel 5a',
      'Pixel 4a',
      'Pixel 4',
      'Pixel 3a'
    ]
  }
];

const SmartphoneModelsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">Available Smartphone Models</h2>
          <p className="text-xl text-gray-600">Choose from a variety of quality smartphones from top manufacturers</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-light/10 to-primary-dark/10 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 relative mr-3 flex items-center justify-center">
                  <DevicePhoneMobileIcon className={`h-8 w-8 ${brand.isIphone ? 'text-gray-800' : 'text-primary-dark'}`} />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark">{brand.name}</h3>
              </div>
              <ul className="space-y-2">
                {brand.models.map((model, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-dark rounded-full mr-3"></span>
                    {model}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-600"
        >
          <p>* Available models may vary by provider and location. Contact your local provider for specific model availability.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartphoneModelsSection;