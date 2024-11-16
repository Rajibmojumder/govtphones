import React from 'react';
import Link from 'next/link';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GovtPhones.org</h3>
            <p className="text-gray-400 mb-4">
              Your trusted resource for free government phone programs. We help eligible Americans stay connected through Lifeline and ACP benefits, providing comprehensive information about free phones, services, and application assistance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-400">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                support@govtphones.org
              </p>
              <div className="flex items-start text-gray-400">
                <MapPinIcon className="h-5 w-5 mr-2 mt-1" />
                <div>
                  <p>101 E. 9TH AVE</p>
                  <p>STE. 12-B</p>
                  <p>ANCHORAGE, AK 99501</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GovtPhones.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;