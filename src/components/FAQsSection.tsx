import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What is the Free Government Phone Program?",
    answer: "The Free Government Phone Program, which includes Lifeline and the Affordable Connectivity Program (ACP), provides free phones and service to eligible low-income Americans to ensure everyone has access to essential communications."
  },
  {
    question: "Which providers are offering free 5G phones?",
    answer: "Several major providers offer free 5G phones through government programs, including Assurance Wireless, SafeLink Wireless, and Q Link Wireless. The availability of 5G phones depends on your location and current promotions. Most providers now include 5G-capable devices like the Samsung Galaxy A13 5G or similar models in their offerings."
  },
  {
    question: "Where can you get a phone without paying?",
    answer: "You can get a free phone through various channels: 1) Government programs like Lifeline and ACP if you qualify, 2) Major wireless carriers when switching services with eligible trade-ins, 3) Certified Lifeline providers in your state, or 4) Special promotional offers from participating retailers."
  },
  {
    question: "Which companies provide free iPhones for switching carriers?",
    answer: "While government programs typically don't offer iPhones, major carriers like AT&T, T-Mobile, and Verizon frequently offer free or heavily discounted iPhones when switching carriers. These offers usually require a qualifying trade-in and a commitment to their service plans."
  },
  {
    question: "What options do you have if you don't meet the requirements for a free phone?",
    answer: "If you don't qualify for free government phones, you have several alternatives: 1) Look for carrier switching promotions, 2) Consider budget-friendly prepaid plans, 3) Check for seasonal sales and special offers, 4) Explore certified refurbished devices, or 5) Look into payment plan options with no interest."
  },
  {
    question: "How many free phones can I get per household?",
    answer: "Each eligible household can receive one free phone through the program. Multiple people in the same household cannot receive separate phones."
  },
  {
    question: "What kind of phones are provided?",
    answer: "The program provides modern smartphones capable of calling, texting, and accessing the internet. The exact model varies by provider and availability."
  },
  {
    question: "Do I need to pay anything for the phone or service?",
    answer: "No, qualified participants receive both the phone and monthly service completely free. There are no hidden fees or charges."
  },
  {
    question: "How long can I keep the free phone service?",
    answer: "You can keep the service as long as you remain eligible and recertify your eligibility annually. You must also use your phone at least once every 30 days."
  },
  {
    question: "What happens if I lose my free government phone?",
    answer: "Contact your service provider immediately. Replacement policies vary by provider - some may offer free replacements, while others may charge a fee."
  },
  {
    question: "Can I keep my current phone number?",
    answer: "Yes, in most cases you can transfer your existing phone number to your new free government phone."
  },
  {
    question: "How long does the application process take?",
    answer: "Most applications are processed within 7-10 business days. Once approved, you should receive your phone within 2-3 weeks."
  },
  {
    question: "What network carriers do these phones use?",
    answer: "Free government phones operate on major national networks including AT&T, T-Mobile, and Verizon, depending on your provider and location."
  },
  {
    question: "Can I upgrade my free government phone?",
    answer: "While the basic phone and service are free, some providers offer paid upgrades to premium devices or additional services if desired."
  }
];

const FAQsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about free government phones</p>
        </motion.div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <details className="group p-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDownIcon className="h-5 w-5 text-primary-dark group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;