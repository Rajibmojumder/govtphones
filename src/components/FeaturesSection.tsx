import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  WifiIcon,
  DevicePhoneMobileIcon,
  ChatBubbleBottomCenterTextIcon,
  IdentificationIcon,
  ClockIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Service Options",
    icon: PhoneIcon,
    items: [
      'Landline phone service',
      'Wireless phone service',
      'Broadband internet service',
      'Bundled voice-broadband packages'
    ]
  },
  {
    title: "Network Coverage",
    icon: SignalIcon,
    items: [
      'Nationwide 4G LTE coverage',
      '5G network access (select areas)',
      'High-speed data connectivity',
      'Reliable network performance'
    ]
  },
  {
    title: "Usage Allowances",
    icon: WifiIcon,
    items: [
      'Unlimited talk and text',
      'A set amount of mobile data (4.5GB/month)',
      'Free activation',
      'Free SIM card'
    ]
  },
  {
    title: "Additional Features",
    icon: DevicePhoneMobileIcon,
    items: [
      'Voicemail',
      'Caller ID',
      'Call waiting',
      '911 access',
      'Domestic long-distance calling'
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-dark">Features and Benefits</h2>
          <p className="text-xl text-gray-600">Comprehensive connectivity solutions for eligible participants</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-primary-light to-primary-dark p-8 rounded-xl shadow-lg"
            >
              <feature.icon className="h-12 w-12 text-white mb-6" />
              <h3 className="text-2xl font-semibold mb-6 text-white">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-100">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;