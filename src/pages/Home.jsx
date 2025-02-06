import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import CustomerReviewsSection from "../components/CustomerReviewsSection/CustomerReviewsSection";
import CaseStudiesSection from "../components/CaseStudiesSection/CaseStudiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CaseStudiesSection />

      <FeaturesSection />
      <CustomerReviewsSection />
      <CaseStudiesSection />
      {/* Possibly more sections... */}
    </>
  );
}
