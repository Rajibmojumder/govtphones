import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CalendarIcon, 
  ClockIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RelatedPosts from '../../components/RelatedPosts';

const ComparisonTable = ({ title, items }) => (
  <div className="overflow-x-auto my-8">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Free Government Phones
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Paid Commercial Plans
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {items.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {item.feature}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.free}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.paid}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ComparingPhonePlans = () => {
  const costComparison = [
    {
      feature: 'Monthly Cost',
      free: '$0',
      paid: '$40-$90+'
    },
    {
      feature: 'Activation Fee',
      free: 'None',
      paid: '$20-$40'
    },
    {
      feature: 'Device Cost',
      free: 'Free',
      paid: '$200-$1000+'
    },
    {
      feature: 'Contract Required',
      free: 'No',
      paid: 'Often Yes'
    }
  ];

  const serviceComparison = [
    {
      feature: 'Talk & Text',
      free: 'Unlimited',
      paid: 'Unlimited'
    },
    {
      feature: 'Data Allowance',
      free: '4.5GB-15GB',
      paid: '15GB-Unlimited'
    },
    {
      feature: 'Network Coverage',
      free: 'Major Networks',
      paid: 'Premium Access'
    },
    {
      feature: '5G Access',
      free: 'Limited',
      paid: 'Full Access'
    }
  ];

  return (
    <>
      <NextSeo
        title="Free Government Phones vs Paid Plans: A Complete Comparison"
        description="A detailed comparison of free government phone plans and commercial options, helping you make an informed decision about mobile services."
        canonical="https://govtphones.org/blog/comparing-phone-plans"
        openGraph={{
          title: 'Free Government Phones vs Paid Plans: A Complete Comparison',
          description: 'Compare costs, features, and benefits of free government phones against commercial mobile plans.',
          url: 'https://govtphones.org/blog/comparing-phone-plans',
          type: 'article',
          article: {
            publishedTime: '2024-11-16T00:00:00Z',
            modifiedTime: '2024-11-16T00:00:00Z',
            authors: ['GovtPhones.org'],
            tags: ['Phone Plans', 'Cost Comparison', 'Mobile Services', 'Consumer Guide']
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
                  src="/images/blog/phone-plans-comparison.jpg"
                  alt="Free Government Phones vs Paid Plans"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-dark bg-primary-light/10 rounded-full mb-4">
                  Comparison
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Free Government Phones vs Paid Plans: A Complete Comparison
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
                    When it comes to choosing a mobile phone plan, understanding the differences between free government phones and commercial plans is crucial. This comprehensive comparison will help you make an informed decision based on your needs and circumstances.
                  </p>

                  <div className="info-box">
                    <h3 className="flex items-center text-xl font-semibold mb-4">
                      <ChartBarIcon className="h-6 w-6 mr-2" />
                      Key Comparison Points
                    </h3>
                    <ul className="space-y-2">
                      <li>Cost structure and monthly expenses</li>
                      <li>Service features and limitations</li>
                      <li>Device options and quality</li>
                      <li>Network coverage and reliability</li>
                      <li>Additional benefits and restrictions</li>
                    </ul>
                  </div>

                  <h2 className="flex items-center mt-12">
                    <CurrencyDollarIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Cost Comparison
                  </h2>

                  <p>
                    One of the most significant differences between free government phones and commercial plans lies in their cost structure. Let's break down the financial aspects:
                  </p>

                  <ComparisonTable title="Cost Analysis" items={costComparison} />

                  <blockquote className="border-l-4 border-primary-dark pl-4 italic my-6">
                    "The average American household spends over $1,000 annually on mobile phone services, making free government phone programs a significant financial relief for eligible families." - Telecommunications Industry Report
                  </blockquote>

                  <h2 className="flex items-center mt-8">
                    <SignalIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Service Features and Coverage
                  </h2>

                  <ComparisonTable title="Service Comparison" items={serviceComparison} />

                  <h2 className="flex items-center mt-8">
                    <DevicePhoneMobileIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Device Options and Quality
                  </h2>

                  <p>
                    Device offerings vary significantly between free and paid plans:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Free Government Phones</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                          Basic to mid-range smartphones
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                          Essential features covered
                        </li>
                        <li className="flex items-center">
                          <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                          Limited model selection
                        </li>
                        <li className="flex items-center">
                          <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                          Older device models
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Commercial Plans</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                          Latest flagship devices
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                          Wide range of options
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                          Regular upgrade options
                        </li>
                        <li className="flex items-center">
                          <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                          High device costs
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="flex items-center mt-8">
                    <ScaleIcon className="h-6 w-6 mr-2 text-primary-dark" />
                    Making the Right Choice
                  </h2>

                  <p>
                    Consider these factors when choosing between free and paid plans:
                  </p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Current financial situation</li>
                    <li>Usage requirements and patterns</li>
                    <li>Device preferences</li>
                    <li>Coverage needs</li>
                    <li>Long-term commitment ability</li>
                  </ul>

                  <div className="bg-primary-light/10 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-4">Recommendation</h3>
                    <p>
                      If you qualify for free government phone programs, they offer excellent value for essential communication needs. Check your eligibility at <Link href="/" className="text-primary-dark hover:text-primary-light">govtphones.org</Link>. However, if you require premium features and have the budget, commercial plans provide more options and flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <RelatedPosts currentPostId="comparing-phone-plans" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ComparingPhonePlans;