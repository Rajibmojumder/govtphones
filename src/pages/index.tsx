import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProvidersSection from '../components/ProvidersSection';
import SmartphoneModelsSection from '../components/SmartphoneModelsSection';
import QualificationSection from '../components/QualificationSection';
import DocumentsSection from '../components/DocumentsSection';
import ProgramRulesSection from '../components/ProgramRulesSection';
import ApplicationSection from '../components/ApplicationSection';
import FAQsSection from '../components/FAQsSection';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <>
      <NextSeo
        title="Get a Free Government Phones Today | GovtPhones.org"
        description="Apply for a free government smartphone and service through the Lifeline and ACP programs. Check your eligibility now at govtphones.org!"
        canonical="https://govtphones.org"
        openGraph={{
          url: 'https://govtphones.org',
          title: 'Free Government Phones | govtphones.org',
          description:
            'Get your free government phone through Lifeline and ACP programs. Check eligibility now!',
          site_name: 'govtphones.org',
        }}
      />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <ProvidersSection />
          <SmartphoneModelsSection />
          <QualificationSection />
          <DocumentsSection />
          <ProgramRulesSection />
          <ApplicationSection />
          <FAQsSection />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
