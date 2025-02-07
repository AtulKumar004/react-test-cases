import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturesSection from "./FeaturesSection";
import icon1 from "../../assest/featuresIcon/B2B-ninja-Features-S1.png";
import icon2 from "../../assest/featuresIcon/B2B-ninja-Features-S2.png";
let features = [
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
];
describe("FeaturesSection Component", () => {
  test("should render the FeaturesSection component", () => {
    render(<FeaturesSection features={features} />);
    const title = screen.getByTestId("features-section-title");
    const description = screen.getByTestId("features-section-description");
    const container = screen.getByTestId("feature-card-container");
    const button = screen.getByTestId("view-all-features");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("It should be responsive for mobile and desktop screen", () => {
    render(<FeaturesSection features={features} />);
    const container = screen.getByTestId("feature-card-container");
    expect(container).toHaveClass("my-grid");
  });

  test("Feature button should have hover effect", () => {
    render(<FeaturesSection features={features} />);
    const button = screen.getByTestId("view-all-features");
    expect(button).toHaveClass(
      "hover:bg-gradient-to-r hover:from-[#4100a3] hover:to-[#0d52ff] hover:shadow-lg hover:transition-all"
    );
  });
  test("Feature section should not be there if features cards is missing ", () => {
    features = [];
    render(<FeaturesSection features={features} />);
    const container = screen.queryByTestId("features-section");
    expect(container).not.toBeInTheDocument();
  });
  
});
