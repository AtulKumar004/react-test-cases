import React from "react";
import Section from "../styled/Main";
import "./style.css";
import { BiSolidRightArrow } from "react-icons/bi";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection({ features }) {
  if(!features || features.length === 0) return null;

  return (
    <Section className="bg-gray-100 py-10" data-testid="features-section">
      <div className=" mx-auto px-4">
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
