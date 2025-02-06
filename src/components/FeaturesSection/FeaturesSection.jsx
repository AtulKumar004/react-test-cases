import React from "react";
import icon1 from "../../assest/featuresIcon/B2B-ninja-Features-S1.png";
import icon2 from "../../assest/featuresIcon/B2B-ninja-Features-S2.png";
import icon3 from "../../assest/featuresIcon/B2B-ninja-Features-S3.png";
import icon4 from "../../assest/featuresIcon/B2B-ninja-Features-S4.png";
import icon5 from "../../assest/featuresIcon/B2B-ninja-Features-S5.png";
import icon6 from "../../assest/featuresIcon/B2B-ninja-Features-S6.png";
import Section from "../styled/Main";
import { BiSolidRightArrow } from "react-icons/bi";

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

export default function FeaturesSection() {
  return (
    <Section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="w-full md:text-left text-center text-4xl font-bold mb-6">
          Features
        </h2>
        <p className="md:text-left  w-full text-center text-gray-600 mb-10 sm:max-w-md  max-w-full ">
          B2B Ninja is the BigCommerce tool you need to convert more B2B
          customers...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start  p-4 rounded ">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 mb-3"
              />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className=" inline-flex items-center px-4 py-2 bg-[#555656] text-white hover:bg-gradient-to-r hover:from-[#4100a3] hover:to-[#0d52ff] hover:shadow-lg gap-2 hover:transition-all ">
            <span>View all Features</span>
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </Section>
  );
}
