import React from "react";
import Section from "../styled/Main";
import "./style.css";
import { BiSolidRightArrow } from "react-icons/bi";
import FeatureCard from "./FeatureCard";

// const features = [
//   {
//     title: "Fully Integrated with BigCommerce",
//     description:
//       "B2B Ninja works seamlessly with BigCommerce, no special coding required.",
//     icon: icon1,
//   },
//   {
//     title: "Single Click Quote-to-Order",
//     description:
//       "B2B Ninja streamlines the ordering process for both your customers and sales staff by populating a BigCommerce cart with the quote and pricing.",
//     icon: icon2,
//   },
//   {
//     title: "Mobile Optimized",
//     description:
//       "Whatever device your customers and staff use, B2B Ninja looks and works great.",
//     icon: icon3,
//   },
//   {
//     title: "All Your Quotes in One Dashboard",
//     description:
//       "B2B Ninja makes it easy for you to view and manage your quotes in one convenient place.",
//     icon: icon4,
//   },
//   {
//     title: "PDF Quote Creation & File Attachments",
//     description:
//       "Send your customers beautiful, professional quotes with B2B Ninja. B2B Ninja automatically generates PDF quotes for your customers and allows you to attach extra files if needed.",
//     icon: icon5,
//   },
//   {
//     title: "Support for Advanced Product Types",
//     description:
//       "Add multiple options and features to your products listed in B2B Ninja, so your customers get the right quote for the product they need.",
//     icon: icon6,
//   },

//   // ... add more features
// ];

export default function FeaturesSection({ features }) {
  if(!features || features.length === 0) return null;

  return (
    <Section className="bg-gray-100 py-10" data-testid="features-section">
      <div className="container mx-auto px-4">
        <h2
          className="w-full md:text-left text-center text-4xl font-bold mb-6"
          data-testid="features-section-title"
        >
          Features
        </h2>
        <p
          className="md:text-left  w-full text-center text-gray-600 mb-10 sm:max-w-md  max-w-full "
          data-testid="features-section-description"
        >
          B2B Ninja is the BigCommerce tool you need to convert more B2B
          customers...
        </p>

        <div className="my-grid" data-testid="feature-card-container">
          {features.map((feature, idx) => {
            if (feature.title && feature.description && feature.icon) {
              return (
                <FeatureCard
                  key={idx}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="mt-6">
          <button className=" inline-flex items-center px-4 py-2 bg-[#555656] text-white hover:bg-gradient-to-r hover:from-[#4100a3] hover:to-[#0d52ff] hover:shadow-lg gap-2 hover:transition-all " data-testid="view-all-features" >
            <span>View all Features</span>
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </Section>
  );
}
