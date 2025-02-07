import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import CustomerReviewsSection from "../components/CustomerReviewsSection/CustomerReviewsSection";
import CaseStudiesSection from "../components/CaseStudiesSection/CaseStudiesSection";
import icon1 from "../assest/featuresIcon/B2B-ninja-Features-S1.png";
import icon2 from "../assest/featuresIcon/B2B-ninja-Features-S2.png";
import icon3 from "../assest/featuresIcon/B2B-ninja-Features-S3.png";
import icon4 from "../assest/featuresIcon/B2B-ninja-Features-S4.png";
import icon5 from "../assest/featuresIcon/B2B-ninja-Features-S5.png";
import icon6 from "../assest/featuresIcon/B2B-ninja-Features-S6.png";
const features = [
  {
    title: "Fully Integrated with BigCommerce",
    description:
      "B2B Ninja works seamlessly with BigCommerce, no special coding required.",
    icon: icon1,
  },
  {
    title: "Single Click Quote-to-Order",
    description:
      "B2B Ninja streamlines the ordering process for both your customers and sales staff by populating a BigCommerce cart with the quote and pricing.",
    icon: icon2,
  },
  {
    title: "Mobile Optimized",
    description:
      "Whatever device your customers and staff use, B2B Ninja looks and works great.",
    icon: icon3,
  },
  {
    title: "All Your Quotes in One Dashboard",
    description:
      "B2B Ninja makes it easy for you to view and manage your quotes in one convenient place.",
    icon: icon4,
  },
  {
    title: "PDF Quote Creation & File Attachments",
    description:
      "Send your customers beautiful, professional quotes with B2B Ninja. B2B Ninja automatically generates PDF quotes for your customers and allows you to attach extra files if needed.",
    icon: icon5,
  },
  {
    title: "Support for Advanced Product Types",
    description:
      "Add multiple options and features to your products listed in B2B Ninja, so your customers get the right quote for the product they need.",
    icon: icon6,
  },

  // ... add more features
];
export default function Home() {
  return (
    <>
      <HeroSection />
      <CaseStudiesSection />

      <FeaturesSection features={features} />
      <CustomerReviewsSection />
      {/* <CaseStudiesSection /> */}
      {/* Possibly more sections... */}
    </>
  );
}
