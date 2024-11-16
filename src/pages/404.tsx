import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <NextSeo
        title="Page Not Found | GovtPhones.org"
        description="The page you're looking for cannot be found. Return to GovtPhones.org to explore free government phone programs."
        noindex={true}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 flex items-center justify-center py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl font-bold text-primary-dark mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary-light transition-colors duration-300"
            >
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;