import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarIcon,
  ClockIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  ClockIcon as TimelineIcon,
} from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RelatedPosts from '../../components/RelatedPosts';

const HistoryACPProgram = () => {
  return (
    <>
      <NextSeo
        title="The Rise and Sunset of the Affordable Connectivity Program (ACP)"
        description="Explore the history, impact, and conclusion of the Affordable Connectivity Program, including important end dates and transition information."
        canonical="https://govtphones.org/blog/history-acp-program"
        openGraph={{
          title:
            'The Rise and Sunset of the Affordable Connectivity Program (ACP)',
          description:
            'A comprehensive look at the ACP program, from its inception to its conclusion in 2024.',
          url: 'https://govtphones.org/blog/history-acp-program',
          type: 'article',
          article: {
            publishedTime: '2024-11-16T00:00:00Z',
            modifiedTime: '2024-11-16T00:00:00Z',
            authors: ['GovtPhones.org'],
            tags: [
              'ACP',
              'Digital Divide',
              'Internet Access',
              'Government Programs',
            ],
          },
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-96">
                <Image
                  src="/images/blog/acp-history-hero.jpg"
                  alt="History of the ACP program"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-dark bg-primary-light/10 rounded-full mb-4">
                  Program History
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  The Rise and Sunset of the Affordable Connectivity Program (ACP)
                </h1>

                <div className="flex items-center text-gray-500 text-sm mb-8 space-x-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <time dateTime="2024-11-16">November 16, 2024</time>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>9 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none blog-content">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                    <h3 className="flex items-center text-xl font-semibold text-red-800 mb-2">
                      <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
                      Important Notice
                    </h3>
                    <p className="text-red-800">
                      Due to a lack of additional funding from Congress, the
                      Affordable Connectivity Program will end. The final day
                      for service will be May 31, 2024.
                    </p>
                  </div>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    The Affordable Connectivity Program (ACP) represented a
                    significant step forward in bridging the digital divide in
                    America. From its emergence during the pandemic to its
                    scheduled conclusion in 2024, the program has helped
                    millions of households stay connected in an increasingly
                    digital world.
                  </p>

                  <h2 className="flex items-center mt-12">
                    <DocumentTextIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Origins and Evolution
                  </h2>

                  <p>
                    The ACP evolved from the Emergency Broadband Benefit (EBB)
                    program, which was established in response to the COVID-19
                    pandemic. Key milestones include:
                  </p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>December 2021: Transition from EBB to ACP</li>
                    <li>January 2022: Full ACP implementation</li>
                    <li>February 2024: Wind-down announcement</li>
                    <li>May 2024: Program conclusion</li>
                  </ul>

                  <h2 className="flex items-center mt-8">
                    <ChartBarIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Program Impact
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        Achievements
                      </h3>
                      <ul className="space-y-2">
                        <li>Over 20 million households served</li>
                        <li>$30-$75 monthly internet discounts</li>
                        <li>One-time device discount up to $100</li>
                        <li>Nationwide provider participation</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        Communities Served
                      </h3>
                      <ul className="space-y-2">
                        <li>Low-income families</li>
                        <li>Students and educators</li>
                        <li>Rural communities</li>
                        <li>Tribal lands residents</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="flex items-center mt-8">
                    <TimelineIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Program Conclusion Timeline
                  </h2>

                  <div className="bg-gray-50 p-6 rounded-lg my-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">
                          February 2024:
                        </span>
                        Wind-down announcement and enrollment freeze
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">March 2024:</span>
                        Last month for new enrollments
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">April 2024:</span>
                        Final billing cycle begins
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">
                          May 31, 2024:
                        </span>
                        Final day of ACP service
                      </li>
                    </ul>
                  </div>

                  <h2 className="flex items-center mt-8">
                    <UserGroupIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Next Steps for Subscribers
                  </h2>

                  <p>Current ACP beneficiaries should:</p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>
                      Contact their internet service provider about post-ACP
                      options
                    </li>
                    <li>Review available low-cost internet programs</li>
                    <li>
                      Consider{' '}
                      <Link
                        href="/"
                        className="text-primary-dark hover:text-primary-light"
                      >
                        Lifeline program benefits
                      </Link>
                    </li>
                    <li>Prepare for potential service changes</li>
                  </ul>

                  <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Alternative Programs
                    </h3>
                    <p>
                      While the ACP is ending, other assistance programs remain
                      available. Visit{' '}
                      <Link
                        href="/"
                        className="text-primary-dark hover:text-primary-light"
                      >
                        govtphones.org
                      </Link>{' '}
                      to explore alternatives like the Lifeline program and
                      state-specific initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <RelatedPosts currentPostId="history-acp-program" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HistoryACPProgram;