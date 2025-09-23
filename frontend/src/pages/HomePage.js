import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesBar from '../components/FeaturesBar';
import CompanyListings from '../components/CompanyListings';
import ContentSections from '../components/ContentSections';
import { mockData } from '../data/mockData';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesBar />
      <CompanyListings companies={mockData.companies} />
      <ContentSections />
    </div>
  );
};

export default HomePage;