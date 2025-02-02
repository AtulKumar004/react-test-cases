import React, { useState } from 'react';

const reviews = [
  {
    logo: '/path/to/logo1.png',
    text: 'This app has done so much for our business...',
    website: '2DSEMICONDUCTORS.COM'
  },
  {
    logo: '/path/to/logo2.png',
    text: 'We looked for something like this for years...',
    website: 'APEXLIGHTING.COM'
  },
  // ... more
];

export default function CustomerReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          B2B Ninja is the highest rated app on the BigCommerce App Store in the B2B Category.
        </p>
        <div className="relative inline-block max-w-xl mx-auto p-6 bg-gray-50 rounded shadow-sm">
          <img
            src={currentReview.logo}
            alt="Customer Logo"
            className="h-12 mx-auto mb-4 object-contain"
          />
          <p className="text-gray-700 mb-4">{currentReview.text}</p>
          <p className="text-blue-500 font-semibold">{currentReview.website}</p>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
