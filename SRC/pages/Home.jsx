import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SummarySection from '../components/home/SummarySection';
import ToolsSection from '../components/home/ToolsSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SummarySection />
      <ToolsSection />
      <FeaturedProjects />
      <CTASection />
    </div>
  );
}