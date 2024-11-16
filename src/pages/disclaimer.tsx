import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Disclaimer = () => {
  return (
    <>
      <NextSeo
        title="Disclaimer | GovtPhones.org"
        description="Important disclaimers regarding the use of our website and information about free government phone programs."
        canonical="https://govtphones.org/disclaimer"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-4xl font-bold text-primary-dark mb-6">Disclaimer</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Please read this disclaimer carefully before using GovtPhones.org. This disclaimer outlines important information about our website and services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Accuracy</h2>
                <p className="text-gray-700 mb-6">
                  While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, reliability, or accuracy of the information on this website. Any reliance on this information is at your own risk.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Not Official Government Website</h2>
                <p className="text-gray-700 mb-6">
                  GovtPhones.org is not affiliated with any government agency. We provide information about government programs but are not responsible for program administration or eligibility decisions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Content</h2>
                <p className="text-gray-700 mb-6">
                  Our website may contain links to third-party websites or content. We are not responsible for the content, accuracy, or practices of these external sites.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">No Professional Advice</h2>
                <p className="text-gray-700 mb-6">
                  The information provided on this website is for general informational purposes only and should not be considered professional advice. Consult appropriate professionals for specific advice.
                </p>

                <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">Contact Information</h3>
                  <p className="text-gray-700">
                    If you have questions about this disclaimer or need clarification, please contact our support team.
                  </p>
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

export default Disclaimer;