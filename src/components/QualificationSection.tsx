import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const qualifyingPrograms = [
  'Supplemental Nutrition Assistance Program (SNAP)',
  'Medicaid / Medi-Cal',
  'Supplemental Security Income (SSI)',
  'Veteran and Survivors Pension Benefit',
  'Lifeline',
  'Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)',
  'Tribally Assistance Programs (TANF, BIA etc)',
  'Federal Public Housing Assistance or Section 8',
  'Free and Reduced-Price School Lunch Program or School Breakfast Program',
  'Low Income Home Energy Assistance Program (LIHEAP)',
  'Federal Pell Grant in the current award year',
];

const QualificationSection = () => {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary-dark">
            Who Qualifies?
          </h2>
          <p className="text-xl text-gray-600">
            Check if you're eligible for a free government phone
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 h-full">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-dark">
                Qualifying Programs
              </h3>
              <ul className="space-y-3">
                {qualifyingPrograms.map((program, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-dark mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary-light/10 to-primary-dark/10 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary-dark">
                Income-Based Qualification
              </h3>
              <p className="text-gray-700 mb-4">
                Your household may qualify if your income is at or below 135% of
                the{' '}
                <Link
                  href="https://www.lifelinesupport.org/do-i-qualify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-dark hover:text-primary-light underline"
                >
                  Federal Poverty Guidelines
                </Link>
                .
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-primary-dark mr-2" />
                  Annual income verification required
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-primary-dark mr-2" />
                  Household size considered
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-primary-dark mr-2" />
                  Documentation needed for proof
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 h-full flex items-center justify-center">
            <img
              src="/images/programs/qualifying-programs.png"
              alt="Qualifying Program Logos"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
