import React, { useState } from "react";
import BG1 from "../../assest/customerReviews/2Dsemiconductors-col.svg";
import BG2 from "../../assest/customerReviews/Apex-1-col.svg";
import BG3 from "../../assest/customerReviews/SG-USA-col.svg";
import BG4 from "../../assest/customerReviews/download.png";
import CardSlider from "../cardSlider/CardSlider";
import Section from "../styled/Main";

const reviews = [
  {
    logo: BG1,
    text: "This app has done so much for our business in a short time. We used to spend hours by email and phone creating quotes and custom orders for our customers. With B2B Ninja they are able to do it quickly and easily themselves.",
    website: "2DSEMICONDUCTORS.COM",
  },
  {
    logo: BG2,
    text: "We've looked for something like this for years. With B2B Ninja, our sales staff can create quotes in seconds and the email that is sent out looks really good with pictures, links to each product as well as a Checkout button.",
    website: "APEXLIGHTING.COM",
  },
  {
    logo: BG3,
    text: "John & Micah are a pleasure to work with. They've created an excellent quoting app for BigCommerce that is backed up with amazing customer support. I would recommend the B2B Ninja app to anyone who needs quoting functionality for their BC store.",
    website: "SOUTHERNELE.COM",
  },
  {
    logo: BG4,
    text: "John & Micah are a pleasure to work with. They've created an excellent quoting app for BigCommerce that is backed up with amazing customer support. I would recommend the B2B Ninja app to anyone who needs quoting functionality for their BC store.",
    website: "SAFETYGLASSESUSA.COM",
  },
  // ... more
];

export default function CustomerReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = reviews[currentIndex];

  return (
    <Section className="min-h-screen bg-gray-50 p-8 flex-col ">
      <h1 className="text-center text-3xl font-bold mb-4">Customer Reviews</h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        B2B Ninja is the highest rated app on the BigCommerce App Store in the
        B2B Category.
      </p>

      {/* Show 2 cards at a time, for example */}
      <CardSlider cards={reviews} cardsToShow={2} />
    </Section>
  );
}
