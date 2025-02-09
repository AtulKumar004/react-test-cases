import React, { useEffect, useState } from "react";
import ArrowIcon from "../../assest/arrow.svg";
import "./style.css";

export default function CardSlider({ cards = [], cardsToShow = 1 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShowState, setCardsToShowState] = useState(cardsToShow);

  // The maximum starting index we can have
  const maxIndex = Math.max(cards.length - cardsToShowState, 0);

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

  // How many slides total? (for dot navigation)
  const totalSlides = maxIndex + 1;
  // Handle the window resizing and adjust cardsToShowState
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Mobile screen size (adjust as needed)
        setCardsToShowState(1); // Show 1 card on mobile
      } else {
        setCardsToShowState(cardsToShow); // Show the default number of cards
      }
    };

    handleResize(); // Call it once to set the initial value
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup on component unmount
  }, [cardsToShow]);

  return (
    <div
      className="w-full relative flex flex-col gap-4"
      data-testid="customer_review_section_slider_cont"
    >
      {/* Cards Container */}
      <div className="flex w-full items-center justify-between ">
        {/* Left arrow button */}
        <button
          onClick={handlePrev}
          className=" prevBtn "
          disabled={currentIndex === 0}
          aria-label="Previous Slide"
        >
          {/* <img src={ArrowIcon} alt="ArrowIcon" className="rotate-180" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="rotate-180"
            enable-background="new 0 0 444.819 444.819"
            version="1.1"
            viewBox="0 0 444.819 444.819"
            // xml:space="preserve"
            height="18"
            width="18"
          >
            <path
              class="index-module--buttonIcon--29KgC"
              d="M352.025 196.712L165.884 10.848C159.029 3.615 150.469 0 140.187 0s-18.842 3.619-25.697 10.848L92.792 32.264c-7.044 7.043-10.566 15.604-10.566 25.692 0 9.897 3.521 18.56 10.566 25.981L231.545 222.41 92.786 361.168c-7.042 7.043-10.564 15.604-10.564 25.693 0 9.896 3.521 18.562 10.564 25.98l21.7 21.413c7.043 7.043 15.612 10.564 25.697 10.564 10.089 0 18.656-3.521 25.697-10.564L352.025 248.39c7.046-7.423 10.571-16.084 10.571-25.981.001-10.088-3.525-18.654-10.571-25.697z"
            ></path>
          </svg>
        </button>

        {/* Slider Wrapper (overflow hidden) */}
        <div
          className="relative w-full overflow-hidden h-auto md:h-80"
          style={{ overflow: "hidden" }}
        >
          {/* Slider Track (translates left/right) */}
          <div
            className="flex flex-shrink-0 transition-transform duration-500 ease-in-out h-full w-full "
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / cardsToShowState
              }%)`,
            }}
            data-testid="cards-component"
          >
            {cards.map((item, index) => (
              <div
                key={index}
                // Each card takes up (100 / cardsToShowState)%
                className="  flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-md  px-4    "
                // style={{
                //   width: `${100 / cardsToShowState}%`,
                // }}
                style={{
                  flex: "0 0 auto", // Prevent shrinking/growing
                  width: `${100 / cardsToShowState}%`, // Ensure precise card width
                }}
              >
                <div
                  className="   h-full  flex-shrink-0 flex flex-col items-center shadow-xl justify-center px-4  py-2 md:py-4"
                  // style={{
                  //   boxShadow:
                  //     "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
                  // }}
                >
                  {/* Logo */}
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt="Logo"
                      className="h-12 object-contain mb-3"
                      style={{ flex: "1 0 0" }}
                    />
                  )}

                  {/* Main Text */}
                  <p
                    className="text-base text-gray-600 text-center md:text-left mb-3"
                    style={{ flex: "1 0 0" }}
                  >
                    {item.text}
                  </p>

                  {/* Website (centered at bottom) */}
                  <p className="text-base font-semibold text-gray-800 text-center md:text-right w-full mt-auto">
                    {item.website}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow button */}
        <button
          onClick={handleNext}
          className="nextBtn "
          disabled={currentIndex === maxIndex}
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enable-background="new 0 0 444.819 444.819"
            version="1.1"
            viewBox="0 0 444.819 444.819"
            // xml:space="preserve"
            height="18"
            width="18"
          >
            <path
              class="index-module--buttonIcon--29KgC"
              d="M352.025 196.712L165.884 10.848C159.029 3.615 150.469 0 140.187 0s-18.842 3.619-25.697 10.848L92.792 32.264c-7.044 7.043-10.566 15.604-10.566 25.692 0 9.897 3.521 18.56 10.566 25.981L231.545 222.41 92.786 361.168c-7.042 7.043-10.564 15.604-10.564 25.693 0 9.896 3.521 18.562 10.564 25.98l21.7 21.413c7.043 7.043 15.612 10.564 25.697 10.564 10.089 0 18.656-3.521 25.697-10.564L352.025 248.39c7.046-7.423 10.571-16.084 10.571-25.981.001-10.088-3.525-18.654-10.571-25.697z"
            ></path>
          </svg>

          {/* <img src={ArrowIcon} alt="ArrowIcon" /> */}
        </button>
      </div>

      {/* Dots Pagination (aligned to the right) */}
      <div
        className="flex items-center mt-4 space-x-2 justify-center"
        data-testid="pagination-dot"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full focus:outline-none
           ${
             index === currentIndex
               ? "" // We'll handle the gradient via inline style
               : " border border-[#0d52ff]"
           }`}
            style={
              index === currentIndex
                ? { background: "linear-gradient(270deg, #0d52ff 0, #4a04a3)" }
                : {}
            }
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
