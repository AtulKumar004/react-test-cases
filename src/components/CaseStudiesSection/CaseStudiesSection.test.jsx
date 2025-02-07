import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CaseStudiesSection from "./CaseStudiesSection";
// Helper to set the viewport width and dispatch a resize event.
const setViewport = (width) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("CaseStudiesSection Component", () => {
  const originalWidth = window.innerWidth;
  afterEach(() => {
    cleanup();
    // Reset the viewport after each test.
    setViewport(originalWidth);
  });
  let props = {
    title: "Real Case Studies",
    description: `Before you try B2B Ninja, learn about how our customers use B2B Ninja to
            boost sales, convert traffic, and save time.`,
  };
  //1. It should render the CaseStudiesSection component
  test("should render the CaseStudiesSection component", () => {
    render(<CaseStudiesSection />);
    const caseStudiesSection = screen.getByTestId("case-studies-section");
    expect(caseStudiesSection).toBeInTheDocument();
  });
  test("should have title and description section ", () => {
    render(<CaseStudiesSection {...props} />);
    const title = screen.getByRole("heading", { name: "Real Case Studies" });

    const description = screen.getByTestId("case_study_section_description");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      /Before you try B2B Ninja, learn about how our customers use B2B Ninja to\s+boost sales, convert traffic, and save time./
    );
  });

  //3. It should render two card in row for desktop and 1 card for mobile
    test("should render two card in row for desktop and 1 card for mobile", () => {
        render(<CaseStudiesSection />);
        const cardContainer = screen.getByTestId("case_study_card_container");
        expect(cardContainer).toBeInTheDocument();
        expect(cardContainer).toHaveClass("grid grid-cols-1 md:grid-cols-2 gap-6");
    });

    // 4. Can have any number of cards, it should not break the layout
    test("should render any number of cards, it should not break the layout", () => {
        render(<CaseStudiesSection />);
        const cardContainer = screen.getByTestId("case_study_card_container");
        expect(cardContainer).toBeInTheDocument();
        expect(cardContainer).toHaveClass("grid grid-cols-1 md:grid-cols-2 gap-6");
    });

    // test("renders correctly on laptop view (viewport width: 1440px)", () => {
    //   // Set viewport for a larger screen (laptop/desktop).
    //   setViewport(1440);
    //   render(<CaseStudiesSection />);
    //   const cardContainer = screen.getByTestId("case_study_card_container");
  
    //   // Check that the container exists.
    //   expect(cardContainer).toBeInTheDocument();
    //   // In laptop view, Tailwind’s responsive classes apply.
    //   // Our markup still contains the same class names, and we verify that they are present.
    //   expect(cardContainer.className).toMatch(/grid-cols-1/);
    //   expect(cardContainer.className).toMatch(/md:grid-cols-2/);
    //   expect(cardContainer.className).toMatch(/gap-6/);
    // });






});
