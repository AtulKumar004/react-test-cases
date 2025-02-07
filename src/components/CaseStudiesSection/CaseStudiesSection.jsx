import React from "react";
import Card from "./Card";
import BG1 from "../../assest/BG1.webp";
import BG2 from "../../assest/BG2.webp";
import BG3 from "../../assest/BG3.webp";
import BG4 from "../../assest/BG4.webp";

import TitleImg1 from "../../assest/Logo1.svg";
import TitleImg2 from "../../assest/Logo2.svg";
import TitleImg3 from "../../assest/Logo3.svg";
import TitleImg4 from "../../assest/BulkBookstore-col.svg";

import Section from "../styled/Main";


export default function CaseStudiesSection() {
  const cardsData = [
    {
      BGimage: BG1, // Replace with actual image URLs
      TitleImg: TitleImg1,
      title: "Bulk Bookstore",
      description: "Bulk Bookstore Revolutionizes Their Quote Process",
      buttonText: "See Case Study",
    },
    {
      BGimage: BG2, // Replace with actual image URLs
      TitleImg: TitleImg2,
      title: "ALB - Your Resource in Lighting",
      description: "Atlanta Light Bulbs Reaches New Customers Using B2B Ninja",
      buttonText: "See Case Study",
    },
    {
      BGimage: BG3, // Replace with actual image URLs
      TitleImg: TitleImg3,
      title: "ALB - Your Resource in Lighting",
      description: "Atlanta Light Bulbs Reaches New Customers Using B2B Ninja",
      buttonText: "See Case Study",
    },
    {
      BGimage: BG4, // Replace with actual image URLs
      TitleImg: TitleImg4,
      title: "ALB - Your Resource in Lighting",
      description: "Atlanta Light Bulbs Reaches New Customers Using B2B Ninja",
      buttonText: "See Case Study",
    },
  ];

  return (
    <Section
      data-testId="case-studies-section"
      className=" flex-col items-start"
      style={{
        alignItems: "flex-start",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <h1 className="w-full md:text-left text-center text-4xl font-bold mb-6">
        Real Case Studies
      </h1>
      <p data-testid= "case_study_section_description" className="md:text-left  w-full text-center text-gray-600 mb-10 sm:max-w-md  max-w-full ">
        Before you try B2B Ninja, learn about how our customers use B2B Ninja to
        boost sales, convert traffic, and save time.
      </p>
      <div data-testid = "case_study_card_container" className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6  ">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.BGimage}
            titleImg={card.TitleImg}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </Section>
  );
}
