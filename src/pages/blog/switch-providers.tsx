import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CalendarIcon, 
  ClockIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  PhoneIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RelatedPosts from '../../components/RelatedPosts';

const SwitchingProviders = () => {
  return (
    <>
      <NextSeo
        title="How to Switch Free Government Phone Providers Seamlessly"
        description="Expert guide on changing your Lifeline service provider without losing service or benefits. Learn the step-by-step process and avoid common pitfalls."
        canonical="https://govtphones.org/blog/switch-providers"
        openGraph={{
          title: 'How to Switch Free Government Phone Providers Seamlessly',
          description: 'Complete guide to changing your Lifeline provider while maintaining continuous service.',
          url: 'https://govtphones.org/blog/switch-providers',
          type: 'article',
          article: {
            publishedTime: '2024-11-16T00:00:00Z',
            modifiedTime: '2024-11-16T00:00:00Z',
            authors: ['GovtPhones.org'],
            tags: ['Lifeline Program', 'Provider Switch', 'Mobile Service', 'Guide']
          }
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-96">
                <Image
                  src="/images/blog/switch-providers-guide.jpg"
                  alt="Switch providers"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-dark bg-primary-light/10 rounded-full mb-4">
                  Guide
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  How to Switch Free Government Phone Providers Seamlessly
                </h1>

                <div className="flex items-center text-gray-500 text-sm mb-8 space-x-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <time dateTime="2024-11-16">November 16, 2024</time>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>6 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none blog-content">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Whether you're seeking better coverage, improved customer service, or different features, switching your Lifeline provider doesn't have to be complicated. This comprehensive guide will walk you through the process while ensuring you maintain continuous service.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
                    <h3 className="flex items-center text-xl font-semibold text-yellow-800 mb-2">
                      <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
                      Important Reminder
                    </h3>
                    <p className="text-yellow-800">
                      You can only switch providers once every 60 days unless you qualify for an exception. Make sure to maintain your current service until the transfer is complete.
                    </p>
                  </div>

                  <h2 className="flex items-center mt-12">
                    <DocumentTextIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Before You Switch
                  </h2>

                  <p>
                    Take these important steps before initiating the switch:
                  </p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Verify your eligibility for a provider change</li>
                    <li>Research available providers in your area</li>
                    <li>Compare service offerings and coverage maps</li>
                    <li>Back up important data from your current device</li>
                    <li>Document your current account information</li>
                  </ul>

                  <h2 className="flex items-center mt-8">
                    <ArrowPathIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Step-by-Step Switching Process
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">1. Contact Your New Provider</h3>
                      <p>Begin by reaching out to your chosen new provider. They will:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Verify your eligibility</li>
                        <li>Check service availability</li>
                        <li>Explain their specific transfer process</li>
                        <li>Schedule the transfer date</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">2. Prepare Required Documentation</h3>
                      <p>Gather necessary documents:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Government-issued ID</li>
                        <li>Proof of eligibility</li>
                        <li>Current account information</li>
                        <li>Address verification</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">3. Complete the Transfer Request</h3>
                      <p>The new provider will:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Submit the transfer request to NLAD</li>
                        <li>Coordinate with your current provider</li>
                        <li>Schedule service activation</li>
                        <li>Arrange device delivery (if applicable)</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="flex items-center mt-8">
                    <PhoneIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    During the Transfer
                  </h2>

                  <p>
                    Keep these points in mind during the transition:
                  </p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Maintain your current service until the transfer completes</li>
                    <li>Follow activation instructions carefully</li>
                    <li>Test your new service immediately</li>
                    <li>Keep both providers' contact information handy</li>
                  </ul>

                  <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-4">Pro Tips for a Smooth Transition</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-dark mt-1 mr-2" />
                        Choose a transfer date mid-billing cycle
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-dark mt-1 mr-2" />
                        Back up contacts and important data
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-dark mt-1 mr-2" />
                        Keep your old device until new service is confirmed
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-dark mt-1 mr-2" />
                        Document all communications with both providers
                      </li>
                    </ul>
                  </div>

                  <h2 className="flex items-center mt-8">
                    <ChartBarIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    After the Switch
                  </h2>

                  <p>
                    Complete these final steps to ensure a successful transition:
                  </p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Verify all features are working properly</li>
                    <li>Update automatic payment settings if necessary</li>
                    <li>Save new provider contact information</li>
                    <li>Review the new service agreement terms</li>
                  </ul>

                  <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
                    <p>
                      If you're ready to switch providers or need assistance with the process, visit{' '}
                      <Link href="/" className="text-primary-dark hover:text-primary-light">
                        govtphones.org
                      </Link>{' '}
                      to explore available providers in your area and get step-by-step guidance for your specific situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <RelatedPosts currentPostId="switch-providers" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SwitchingProviders;