import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  MapPinIcon,
  PhoneIcon,
  BoltIcon,
  SignalIcon,
} from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RelatedPosts from '../../components/RelatedPosts';

const EmergencyPreparedness = () => {
  return (
    <>
      <NextSeo
        title="Emergency Preparedness: How Free Phones Can Save Lives"
        description="Learn how free government phones serve as crucial lifelines during emergencies and natural disasters, providing essential communication capabilities when needed most."
        canonical="https://govtphones.org/blog/emergency-preparedness"
        openGraph={{
          title: 'Emergency Preparedness: How Free Phones Can Save Lives',
          description:
            'Discover the critical role of free government phones in emergency situations and disaster response.',
          url: 'https://govtphones.org/blog/emergency-preparedness',
          type: 'article',
          article: {
            publishedTime: '2024-11-16T00:00:00Z',
            modifiedTime: '2024-11-16T00:00:00Z',
            authors: ['GovtPhones.org'],
            tags: [
              'Emergency Preparedness',
              'Safety',
              'Disaster Response',
              'Public Safety',
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
                  src="/images/blog/emergency-preparedness-hero.jpg"
                  alt="Emergency preparedness"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-dark bg-primary-light/10 rounded-full mb-4">
                  Safety
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Emergency Preparedness: How Free Phones Can Save Lives
                </h1>

                <div className="flex items-center text-gray-500 text-sm mb-8 space-x-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <time dateTime="2024-11-16">November 16, 2024</time>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>7 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none blog-content">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    In times of crisis, having reliable communication can mean
                    the difference between life and death. Free government
                    phones serve as essential lifelines during emergencies,
                    providing crucial communication capabilities when they're
                    needed most.
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                    <h3 className="flex items-center text-xl font-semibold text-red-800 mb-2">
                      <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
                      Critical Information
                    </h3>
                    <p className="text-red-800">
                      Always ensure your free government phone is charged and
                      accessible. During emergencies, it could be your primary
                      means of calling for help or receiving critical updates.
                    </p>
                  </div>

                  <h2 className="flex items-center mt-12">
                    <ShieldCheckIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Emergency Response Features
                  </h2>

                  <p>
                    Free government phones come equipped with essential
                    emergency features:
                  </p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Enhanced 911 services with location tracking</li>
                    <li>Emergency alerts and notifications</li>
                    <li>Priority network access during crises</li>
                    <li>Emergency contact quick-dial options</li>
                  </ul>

                  <blockquote className="border-l-4 border-primary-dark pl-4 italic my-6">
                    "Having a free government phone literally saved my life
                    during last year's severe weather event. I was able to call
                    emergency services and stay updated on evacuation orders." -
                    James, Program Participant
                  </blockquote>

                  <h2 className="flex items-center mt-8">
                    <MapPinIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Natural Disaster Response
                  </h2>

                  <p>During natural disasters, these phones provide:</p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Real-time weather alerts and updates</li>
                    <li>Emergency evacuation information</li>
                    <li>Access to disaster relief resources</li>
                    <li>Communication with emergency services</li>
                  </ul>

                  <h2 className="flex items-center mt-8">
                    <BoltIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Power Outage Preparation
                  </h2>

                  <p>Essential tips for power outages:</p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Keep an emergency power bank charged</li>
                    <li>Enable battery-saving mode</li>
                    <li>Download offline emergency information</li>
                    <li>Store important numbers locally</li>
                  </ul>

                  <h2 className="flex items-center mt-8">
                    <SignalIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Network Reliability
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        During Normal Times
                      </h3>
                      <ul className="space-y-2">
                        <li>Regular network coverage</li>
                        <li>Standard call priority</li>
                        <li>Normal data speeds</li>
                        <li>Basic emergency services</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        During Emergencies
                      </h3>
                      <ul className="space-y-2">
                        <li>Enhanced network priority</li>
                        <li>Emergency call routing</li>
                        <li>Extended battery features</li>
                        <li>Crisis-specific services</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="flex items-center mt-8">
                    <PhoneIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Emergency Preparedness Tips
                  </h2>

                  <ul className="list-disc pl-6 mb-6">
                    <li>
                      Save emergency contacts with ICE (In Case of Emergency)
                      prefix
                    </li>
                    <li>Download emergency preparedness apps</li>
                    <li>Keep a written copy of important numbers</li>
                    <li>Learn your phone's emergency features</li>
                    <li>Practice accessing emergency functions</li>
                  </ul>

                  <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-4">Be Prepared</h3>
                    <p>
                      Don't wait until an emergency strikes. Visit{' '}
                      <Link
                        href="/"
                        className="text-primary-dark hover:text-primary-light"
                      >
                        govtphones.org
                      </Link>{' '}
                      today to learn about getting your free government phone
                      and ensuring you're prepared for any situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <RelatedPosts currentPostId="emergency-preparedness" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EmergencyPreparedness;