import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RelatedPosts from '../../components/RelatedPosts';

const MythsMisconceptions = () => {
  return (
    <>
      <NextSeo
        title="Myths and Misconceptions About Free Government Phones"
        description="Debunk common myths and get accurate information about free government phone programs, eligibility, and services."
        canonical="https://govtphones.org/blog/myths-misconceptions"
        openGraph={{
          title: 'Myths and Misconceptions About Free Government Phones',
          description:
            'Get the facts about free government phones and separate truth from fiction.',
          url: 'https://govtphones.org/blog/myths-misconceptions',
          type: 'article',
          article: {
            publishedTime: '2024-11-16T00:00:00Z',
            modifiedTime: '2024-11-16T00:00:00Z',
            authors: ['GovtPhones.org'],
            tags: ['Myths', 'Facts', 'Education', 'Program Information'],
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
                  src="/images/blog/myths-misconceptions-hero.jpg"
                  alt="Misconceptions about free government phones"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-dark bg-primary-light/10 rounded-full mb-4">
                  Education
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Myths and Misconceptions About Free Government Phones
                </h1>

                <div className="flex items-center text-gray-500 text-sm mb-8 space-x-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <time dateTime="2024-11-16">November 16, 2024</time>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>8 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none blog-content">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Free government phone programs are often misunderstood,
                    leading to misconceptions that may prevent eligible
                    individuals from accessing these valuable services. Let's
                    separate fact from fiction and clarify the most common myths
                    about these programs.
                  </p>

                  <div className="bg-primary-light/10 p-6 rounded-lg mb-8">
                    <h3 className="flex items-center text-xl font-semibold mb-4">
                      <InformationCircleIcon className="h-6 w-6 mr-2 text-primary-dark" />
                      Why Address These Myths?
                    </h3>
                    <p>
                      Misconceptions about free government phones can prevent
                      eligible individuals from accessing essential
                      communication services. Understanding the truth helps
                      ensure everyone who qualifies can benefit from these
                      programs.
                    </p>
                  </div>

                  <h2 className="flex items-center mt-12">
                    <QuestionMarkCircleIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Common Myths vs. Reality
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-8">
                          <XCircleIcon className="h-6 w-6 text-red-500" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold mb-2">
                            Myth: The phones are low-quality disposable devices
                          </h3>
                          <p className="text-gray-700">
                            <span className="font-semibold">Reality:</span>{' '}
                            Modern free government phones are quality
                            smartphones from reputable manufacturers, including
                            models from Samsung, LG, and other major brands.
                            Many devices support 4G LTE and even 5G networks.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-8">
                          <XCircleIcon className="h-6 w-6 text-red-500" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold mb-2">
                            Myth: Only unemployed people qualify
                          </h3>
                          <p className="text-gray-700">
                            <span className="font-semibold">Reality:</span>{' '}
                            Eligibility is based on income level or
                            participation in qualifying assistance programs.
                            Many working individuals and families qualify based
                            on household income guidelines.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-8">
                          <XCircleIcon className="h-6 w-6 text-red-500" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold mb-2">
                            Myth: The service is unreliable and limited
                          </h3>
                          <p className="text-gray-700">
                            <span className="font-semibold">Reality:</span> Free
                            government phones operate on major national
                            networks, providing reliable coverage and service
                            comparable to regular mobile plans.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-8">
                          <XCircleIcon className="h-6 w-6 text-red-500" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold mb-2">
                            Myth: It's a scam or too good to be true
                          </h3>
                          <p className="text-gray-700">
                            <span className="font-semibold">Reality:</span> The
                            Lifeline program is a legitimate federal benefit
                            program established in 1985. It's regulated by the
                            FCC and helps millions of Americans stay connected.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="flex items-center mt-8">
                    <ExclamationTriangleIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Common Concerns Addressed
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        Program Legitimacy
                      </h3>
                      <ul className="space-y-2">
                        <li>Government-regulated program</li>
                        <li>Strict provider oversight</li>
                        <li>Consumer protections</li>
                        <li>Transparent eligibility criteria</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        Service Quality
                      </h3>
                      <ul className="space-y-2">
                        <li>Major network coverage</li>
                        <li>Modern device options</li>
                        <li>Regular service updates</li>
                        <li>Customer support access</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="flex items-center mt-8">
                    <CheckCircleIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Facts About the Program
                  </h2>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Established federal benefit program</li>
                    <li>Multiple provider options</li>
                    <li>Regular service improvements</li>
                    <li>Ongoing program oversight</li>
                  </ul>

                  <h2 className="flex items-center mt-8">
                    <ShieldCheckIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Consumer Protections
                  </h2>

                  <p>Program participants are protected by:</p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>FCC regulations</li>
                    <li>Service quality standards</li>
                    <li>Privacy protections</li>
                    <li>Consumer rights</li>
                  </ul>

                  <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Get the Facts
                    </h3>
                    <p>
                      Visit{' '}
                      <Link
                        href="/"
                        className="text-primary-dark hover:text-primary-light"
                      >
                        govtphones.org
                      </Link>{' '}
                      to learn more about free government phone programs and
                      check your eligibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <RelatedPosts currentPostId="myths-misconceptions" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MythsMisconceptions;