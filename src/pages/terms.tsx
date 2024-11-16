import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <>
      <NextSeo
        title="Terms of Service | GovtPhones.org"
        description="Read our terms of service to understand your rights and responsibilities when using our website and services."
        canonical="https://govtphones.org/terms"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-4xl font-bold text-primary-dark mb-6">Terms of Service</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  By accessing and using GovtPhones.org, you agree to comply with and be bound by these Terms of Service. Please read them carefully before using our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Our Services</h2>
                <p className="text-gray-700 mb-6">
                  Our services are intended to provide information about free government phone programs. You agree to use our services only for lawful purposes and in accordance with these terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Provide accurate information during registration</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Report any unauthorized use or security breaches</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 mb-6">
                  All content on this website is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  We strive to provide accurate information but make no warranties about the completeness, reliability, or accuracy of our content. Your use of our services is at your own risk.
                </p>

                <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">Questions About Our Terms?</h3>
                  <p className="text-gray-700">
                    If you have questions about our terms of service, please contact our support team for clarification.
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

export default Terms;