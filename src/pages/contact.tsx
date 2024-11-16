import React from 'react';
import { NextSeo } from 'next-seo';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact Us | GovtPhones.org"
        description="Get in touch with our team for questions about free government phones, eligibility requirements, or application assistance."
        canonical="https://govtphones.org/contact"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-4xl font-bold text-primary-dark mb-6">Contact Us</h1>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl text-gray-600 mb-8">
                    Have questions about free government phones? We're here to help! Choose your preferred method of contact below.
                  </p>

                  <div className="space-y-6">

                    <div className="flex items-start">
                      <EnvelopeIcon className="h-6 w-6 text-primary-dark mt-1 mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">support@govtphones.org</p>
                        <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPinIcon className="h-6 w-6 text-primary-dark mt-1 mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-600">101 E. 9TH AVE.</p>
                        <p className="text-gray-600">STE. 12-B</p>
                        <p className="text-gray-600">ANCHORAGE, AK 99501</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring-primary-dark"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring-primary-dark"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring-primary-dark"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring-primary-dark"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-light to-primary-dark text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;