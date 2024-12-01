import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <NextSeo
        title="About Us | GovtPhones.org"
        description="Learn about our mission to help eligible Americans access free government phones and stay connected through the Lifeline and ACP programs."
        canonical="https://govtphones.org/about/"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-4xl font-bold text-primary-dark mb-6">About Us</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  At GovtPhones.org, we're dedicated to helping eligible Americans stay connected through free government phone programs. Our mission is to bridge the digital divide and ensure everyone has access to essential communication services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  We believe that access to reliable communication is a fundamental necessity in today's digital world. Our platform serves as a comprehensive resource for understanding and accessing free government phone programs, including Lifeline and the Affordable Connectivity Program (ACP).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Do</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Provide accurate, up-to-date information about free government phone programs</li>
                  <li>Help users understand their eligibility for these programs</li>
                  <li>Guide applicants through the application process</li>
                  <li>Connect users with qualified service providers</li>
                  <li>Offer resources and support for program participants</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Commitment</h2>
                <p className="text-gray-700 mb-6">
                  We are committed to providing accurate, unbiased information and maintaining transparency in all our operations. Our team stays current with program changes and updates to ensure our users have access to the most reliable information.
                </p>

                <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">Get Connected Today</h3>
                  <p className="text-gray-700">
                    If you're interested in learning more about free government phone programs or checking your eligibility, explore our resources or contact our team for assistance.
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

export default About;
