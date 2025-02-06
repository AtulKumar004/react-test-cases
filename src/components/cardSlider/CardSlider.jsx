import React, { useState } from "react";
import ArrowIcon from "../../assest/arrow.svg";
export default function CardSlider({ cards = [], cardsToShow = 1 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // The maximum starting index we can have
  const maxIndex = Math.max(cards.length - cardsToShow, 0);

  // Move to the next "page" of cards
  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  // Move to the previous "page" of cards
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Jump to a particular "page" of cards when a dot is clicked
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // How many slides total? = (cards.length - cardsToShow + 1)
  const totalSlides = maxIndex + 1;

  // Slice the array of cards that should be displayed
  const visibleCards = cards.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="w-full  relative ">
      {/* Cards Container */}
      <div className="flex w-full items-center justify-between space-x-4 ">
        {/* Left arrow button */}
        <div
          onClick={handlePrev}
          className="p-2  text-gray-700 hover:bg-gradient-to-r hover:from-[#4100a3] hover:to-[#0d52ff] hover:shadow-lg gap-2 hover:transition-all border border-gray-500 rounded-full flex justify-center items-center cursor-pointer"
          disabled={currentIndex === 0}
          aria-label="Previous Slide"
        >
          <img src={ArrowIcon} alt="ArrowIcon" className="rotate-180 " />
        </div>

        {/* Visible Cards  */}
        <div className={`grid grid-cols-${cardsToShow} gap-4 w-full h-80  `} >
          {visibleCards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full  
                     p-4 bg-white rounded-md shadow-md  "
            >
              {/* Logo */}
              {item.logo && (
                <img
                  src={item.logo}
                  alt="Logo"
                  className="h-12 object-contain mb-3 "
                  style={{ flex: "3 0 0 " }}
                />
              )}
              {/* Text */}
              <p
                className="text-sm text-gray-600 text-center mb-3 "
                style={{ flex: "2 0 0" }}
              >
                {item.text}
              </p>
              {/* Website */}
              <p className="text-sm font-semibold text-gray-800 flex justify-end w-full ">
                <span>{item.website}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <div
          onClick={handleNext}
          className="p-2 text-gray-700 hover:bg-gradient-to-r hover:from-[#4100a3] hover:to-[#0d52ff]  gap-2 hover:transition-all rounded-full flex justify-center items-center border border-gray-500 cursor-pointer"
          disabled={currentIndex === maxIndex}
          aria-label="Next Slide"
        >
          <img src={ArrowIcon} alt="ArrowIcon" />
        </div>
      </div>

      {/* Dots Pagination */}
      <div className="flex items-center justify-center mt-4 space-x-2 ">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full focus:outline-none
              ${
                index === currentIndex
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
