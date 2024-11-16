import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';

const providers = [
  {
    name: 'Assurance Wireless',
    phone: '1-888-321-5880',
    website: 'www.assurancewireless.com',
    states: 'AR, AZ, CA, CO, CT, DE, DC, FL, GA, ID, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, NV, NH, NJ, NM, NY, NC, OH, OR, PA, RI, SC, TX, UT, VA, WA, WV, WI'
  },
  {
    name: 'SafeLink Wireless',
    phone: '1-800-723-3546',
    website: 'www.safelinkwireless.com',
    states: 'All 50 States, DC, Puerto Rico'
  },
  {
    name: 'Q Link Wireless',
    phone: '1-855-754-6543',
    website: 'www.qlinkwireless.com',
    states: 'AR, AZ, CO, GA, HI, ID, IN, IA, KS, KY, LA, ME, MD, MI, MN, MO, NE, NV, NH, NM, NY, NC, ND, OH, OK, PA, RI, SC, SD, TX, UT, VT, WA, WV, WI, WY'
  },
  {
    name: 'Access Wireless',
    phone: '1-866-594-3644',
    website: 'www.accesswireless.com',
    states: 'AR, CA, CO, CT, DC, GA, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, NE, NV, NH, NJ, NM, NY, NC, OH, OR, PA, RI, SC, TX, UT, VT, VA, WA, WV, WI'
  },
  {
    name: 'TruConnect',
    phone: '1-800-430-0443',
    website: 'www.truconnect.com',
    states: 'AZ, AR, CA, CO, GA, ID, IN, IA, KS, KY, LA, MD, MI, MN, MS, MO, NE, NV, NH, NM, NY, NC, ND, OH, OK, PA, RI, SC, SD, TX, UT, VT, WA, WV, WI, WY'
  },
  {
    name: 'StandUp Wireless',
    phone: '1-800-544-4441',
    website: 'www.standupwireless.com',
    states: 'AZ, AR, CA, CO, GA, IL, IN, KS, KY, LA, MD, MI, MN, MO, NE, NV, OH, OK, PA, RI, SC, TX, UT, WA, WV, WI'
  },
  {
    name: 'Life Wireless',
    phone: '1-888-543-3620',
    website: 'www.lifewireless.com',
    states: 'AR, AZ, CA, CO, GA, HI, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MO, NE, NV, NH, NJ, NM, NY, NC, OH, PA, RI, SC, TX, UT, VA, WA, WI'
  },
  {
    name: 'enTouch Wireless',
    phone: '1-866-488-8719',
    website: 'www.entouchwireless.com',
    states: 'AR, AZ, CA, CO, GA, ID, IL, IN, IA, KS, KY, LA, MD, MI, MN, MO, NE, NV, NY, OH, PA, RI, SC, TX, UT, WA, WI'
  },
  {
    name: 'Easy Wireless',
    phone: '1-877-476-3451',
    website: 'www.easywireless.com',
    states: 'AR, AZ, CA, CO, GA, IL, IN, KS, KY, LA, MI, MN, MO, NE, NV, OH, OK, PA, RI, SC, TX, UT, WA, WI'
  },
    {
    name: 'Airtalk Wireless',
    phone: '1-855-924-7825',
    website: 'www.airtalkwireless.com',
    states: 'AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY'
  },
  {
    name: 'NewPhone Wireless',
    phone: '1-855-204-3667',
    states: 'AR, AZ, CA, CO, GA, IL, IN, KS, KY, LA, MI, MN, MO, NV, OH, PA, RI, SC, TX, UT, WA, WI'
  },
  {
    name: 'Tag Mobile',
    phone: '1-866-959-4918',
    website: 'www.tagmobile.com',
    states: 'AR, CA, CO, GA, IL, IN, KS, KY, LA, MD, MI, MN, MO, NV, OH, PA, RI, SC, TX, UT, WA, WI'
  },
  {
    name: 'TerraCom Wireless',
    phone: '1-877-351-4747',
    website: 'www.terracomwireless.com',
    states: 'AR, IN, KS, LA, MD, MI, MO, OK, TX, WI'
  },
  {
    name: 'Tempo Wireless',
    phone: '1-833-998-3676',
    website: 'www.mytempo.com',
    states: 'AR, CA, GA, IL, IN, KS, KY, LA, MI, MO, OH, OK, PA, SC, TX, WI'
  },
  {
    name: 'True Wireless',
    phone: '1-833-733-8524',
    website: 'www.gotruewireless.com',
    states: 'AR, KS, MD, MO, OK, RI, TX'
  }
];

const ProvidersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-light to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Top Government Phone Providers</h2>
          <p className="text-xl text-gray-200">Choose from trusted providers nationwide</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:bg-white/20 transition-colors duration-300"
            >
              <h3 className="text-white font-semibold text-xl mb-4">{provider.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-200">
                  <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                  <a href={`tel:${provider.phone}`} className="hover:text-white transition-colors">
                    {provider.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-200">
                  <GlobeAltIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                  <a 
                    href={`https://${provider.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {provider.website}
                  </a>
                </div>
                <div className="flex items-start text-gray-200">
                  <MapPinIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm">{provider.states}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;