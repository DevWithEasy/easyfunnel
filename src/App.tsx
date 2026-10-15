import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSolution } from './components/ProblemSolution';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { ElementorWidgets } from './components/ElementorWidgets';
import { Integrations } from './components/Integrations';
import { Pricing } from './components/Pricing';
import { BenefitsSection } from './components/BenefitsSection';
import { FaqAccordion } from './components/FaqAccordion';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LiveDemoModal } from './components/LiveDemoModal';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isLiveDemoOpen, setIsLiveDemoOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleOpenLiveDemo = () => {
    setIsLiveDemoOpen(true);
  };

  const handleOpenDownload = () => {
    setIsDownloadModalOpen(true);
  };

  const handleScrollToDownload = () => {
    const downloadElement = document.getElementById('pricing');
    if (downloadElement) {
      downloadElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsDownloadModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenLiveDemo={handleOpenLiveDemo}
        onOpenPricing={handleOpenDownload}
      />

      <main className="flex-1">
        {/* Section 2: Hero Section */}
        <Hero
          onOpenLiveDemo={handleOpenLiveDemo}
          onOpenPricing={handleOpenDownload}
        />

        {/* Section 3: Social Proof / Trust Bar */}
        <TrustBar />

        {/* Section 4: Problem and Solution */}
        <ProblemSolution />

        {/* Section 5: Key Features (12 Verified Features) */}
        <FeaturesGrid />

        {/* Section 6: Interactive Product Showcase (5 Tabs) */}
        <ProductShowcase
          onOpenLiveDemo={handleOpenLiveDemo}
          onOpenPricing={handleOpenDownload}
        />

        {/* Section 7: How It Works (3 Steps) */}
        <HowItWorks />

        {/* Section 8: Elementor Widget Showcase (All 18 Widgets) */}
        <ElementorWidgets />

        {/* Section 9: Integrations and Compatibility */}
        <Integrations />

        {/* Section 10: 100% Free Edition & Download Section */}
        <Pricing
          onDownloadFree={handleOpenDownload}
          onOpenLiveDemo={handleOpenLiveDemo}
        />

        {/* Section 11: Benefits Section (Authentic Proof) */}
        <BenefitsSection />

        {/* Section 12: Frequently Asked Questions (All 10 Questions) */}
        <FaqAccordion />

        {/* Section 13: Final Conversion CTA */}
        <FinalCta
          onOpenLiveDemo={handleOpenLiveDemo}
          onOpenPricing={handleOpenDownload}
        />
      </main>

      {/* Section 14: Comprehensive Footer */}
      <Footer
        onOpenLiveDemo={handleOpenLiveDemo}
        onOpenPricing={handleScrollToDownload}
      />

      {/* Interactive Live Demo Sandbox */}
      <LiveDemoModal
        isOpen={isLiveDemoOpen}
        onClose={() => setIsLiveDemoOpen(false)}
        onGetPlugin={handleOpenDownload}
      />

      {/* Instant Free Download & Installation Modal */}
      <CheckoutModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
