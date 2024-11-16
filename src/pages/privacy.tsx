import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <NextSeo
        title="Privacy Policy | GovtPhones.org"
        description="Our privacy policy explains how we collect, use, and protect your personal information when you use our website and services."
        canonical="https://govtphones.org/privacy"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-4xl font-bold text-primary-dark mb-2">Privacy Policy</h1>
              <p className="text-sm text-gray-500 mb-8">Last Updated: November 16, 2024</p>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  This Privacy Policy describes how GovtPhones.org collects, uses, and protects your personal information. We are committed to safeguarding your privacy and ensuring transparency in our data practices.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Personal information provided during registration or application</li>
                  <li>Usage data and website analytics</li>
                  <li>Communication preferences</li>
                  <li>Device and browser information</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>To process your program applications</li>
                  <li>To provide customer support and assistance</li>
                  <li>To improve our services and user experience</li>
                  <li>To send important updates and notifications</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. Your data is encrypted and stored securely.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-6">
                  You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.
                </p>

                <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">Contact Us</h3>
                  <p className="text-gray-700">
                    If you have questions about our privacy policy or your personal information, please contact our privacy team.
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

export default Privacy;