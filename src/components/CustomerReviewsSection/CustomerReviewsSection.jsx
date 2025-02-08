import React, { useState } from "react";
import CardSlider from "../cardSlider/CardSlider";
import Section from "../styled/Main";
import {
  customer_review_section_heading,
  customer_review_section_description,
} from "../../dist/data";

export default function CustomerReviewsSection({ reviews }) {
  return (
    <Section
      className="min-h-screen bg-gray-50 p-8 flex-col justify-start  "
      data-testid="customer_review"
    >
      <div className=" w-full">
        <h2
          className="w-full md:text-left text-center text-4xl font-bold mb-6"
          // data-testid="features-section-title"
          data-testid="customer_review_section_title"
        >
          {customer_review_section_heading}
        </h2>
        <div
          className="md:text-left  w-full text-center text-gray-600 mb-10 sm:max-w-md    "
          // data-testid="features-section-description"
          data-testid="customer_review_section_description"
        >
          {customer_review_section_description}
        </div>

        {/* Show 2 cards at a time, for example */}
        <CardSlider
          cards={reviews}
          cardsToShow={2}
         
        />
      </div>
    </Section>
  );
}
