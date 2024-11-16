import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const states = [
  'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
  'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Pennsylvania', 'Puerto Rico',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Utah', 'Vermont', 'Virginia',
  'Virgin Islands', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const statePrograms = {
    'Alabama': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Alaska': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'American Samoa': ['FPHA', 'Veterans Pension', 'None of Above'],
    'Arizona': ['SNAP', 'Tribal TANF', 'Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Arkansas': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Colorado': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Connecticut': ['SNAP', 'Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Delaware': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'District of Columbia': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Florida': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Georgia': ['SNAP', 'Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Guam': ['FPHA', 'Veterans Pension', 'None of Above'],
    'Hawaii': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Idaho': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Illinois': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Indiana': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Iowa': ['SNAP', 'Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Kansas': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Kentucky': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Louisiana': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Maine': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Maryland': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Massachusetts': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Michigan': ['SNAP', 'Medicaid*', 'FPHA', 'SSI', 'Veterans Pension', 'None of Above'],
    'Minnesota': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Mississippi': ['SNAP', 'Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Missouri': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Montana': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Nebraska': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Nevada': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'New Hampshire': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'New Jersey': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'New Mexico': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'New York': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'North Carolina': ['SNAP', 'Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'North Dakota': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Northern Mariana Islands': ['FPHA', 'Veterans Pension', 'None of Above'],
    'Ohio': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Oklahoma': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Pennsylvania': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Puerto Rico': ['NAP/PAN', 'Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Rhode Island': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'South Carolina': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'South Dakota': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Tennessee': ['SNAP', 'Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Utah': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Vermont': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Virginia': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Virgin Islands': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Washington': ['SNAP', 'Medicaid*', 'FPHA', 'Veterans Pension', 'None of Above'],
    'West Virginia': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above'],
    'Wisconsin': ['SNAP', 'Medicaid*', 'FPHA', 'SSI', 'Income', 'Veterans Pension', 'None of Above'],
    'Wyoming': ['Medicaid', 'FPHA', 'Veterans Pension', 'None of Above']
};

const povertyGuidelines2024 = {
  1: 20331,
  2: 27594,
  3: 34857,
  4: 42120,
  5: 49383,
  6: 56646,
  7: 63909,
  8: 71172
};

const EligibilityChecker = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [householdSize, setHouseholdSize] = useState(1);
  const [annualIncome, setAnnualIncome] = useState('');
  const [eligibilityResult, setEligibilityResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  const getStatePrograms = (state) => {
    return statePrograms[state] || [];
  };

  const checkEligibility = () => {
    if (!selectedState) {
      alert('Please select a state');
      return;
    }

    if (!selectedProgram) {
      alert('Please select a program');
      return;
    }

    if (selectedProgram !== 'None of Above') {
      setEligibilityResult('eligible');
    } else {
      if (!annualIncome) {
        alert('Please enter annual income');
        return;
      }
      const maxIncome = povertyGuidelines2024[householdSize] * 1.35;
      setEligibilityResult(Number(annualIncome) <= maxIncome ? 'eligible' : 'ineligible');
    }
    setShowResult(true);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Lifeline Eligibility Checker</h2>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2 flex items-center">
          <InformationCircleIcon className="h-5 w-5 mr-1 text-primary-dark" />
          Each household is allowed only one Lifeline benefit.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-dark focus:ring-primary-dark"
          >
            <option value="">Select your state</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {selectedState && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Qualifying Program</label>
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-dark focus:ring-primary-dark"
            >
              <option value="">Select a program</option>
              {getStatePrograms(selectedState).map((program) => (
                <option key={program} value={program}>{program}</option>
              ))}
            </select>
          </div>
        )}

        {selectedProgram === 'None of Above' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Household Size</label>
              <select
                value={householdSize}
                onChange={(e) => setHouseholdSize(Number(e.target.value))}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-dark focus:ring-primary-dark"
              >
                {[1,2,3,4,5,6,7,8].map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Annual Household Income</label>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
                placeholder="Enter annual income"
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-dark focus:ring-primary-dark"
              />
            </div>
          </>
        )}

        <button
          onClick={checkEligibility}
          className="w-full bg-gradient-to-r from-primary-light to-primary-dark text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Check Eligibility
        </button>

        {showResult && (
          <div className={`p-4 rounded-lg ${
            eligibilityResult === 'eligible' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {eligibilityResult === 'eligible' ? (
              <>
                <p className="font-semibold">Congratulations! You may be eligible for a free government phone.</p>
                <p className="text-sm mt-2">Please review the information below to learn about available phones and how to apply.</p>
              </>
            ) : (
              <>
                <p className="font-semibold">Based on the information provided, you may not be eligible at this time.</p>
                <p className="text-sm mt-2">Please review the qualification criteria below or contact a provider for more information.</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EligibilityChecker;