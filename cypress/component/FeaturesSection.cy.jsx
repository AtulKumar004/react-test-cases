// cypress/component/FeaturesSection.cy.jsx
import React from "react";
import { mount } from "cypress/react";
import FeaturesSection from "../../src/components/FeaturesSection/FeaturesSection"; // adjust the path
import icon1 from "../../src/assest/featuresIcon/B2B-ninja-Features-S1.png"; // adjust the path
import icon2 from "../../src/assest/featuresIcon/B2B-ninja-Features-S2.png"; // adjust the path

describe("FeaturesSection Component", () => {
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

  it("should render the FeaturesSection component", () => {
    mount(<FeaturesSection features={features} />);
    cy.get("[data-testid='features-section-title']").should("exist");
    cy.get("[data-testid='features-section-description']").should("exist");
    cy.get("[data-testid='feature-card-container']").should("exist");
    cy.get("[data-testid='view-all-features']").should("exist");
  });

  it("It should be responsive for mobile and desktop screen", () => {
    mount(<FeaturesSection features={features} />);
    // Check that the container has the responsive grid class
    cy.get("[data-testid='feature-card-container']").should("have.class", "my-grid");
  });

  it("Feature button should have hover effect", () => {
    mount(<FeaturesSection features={features} />);
    // Verify the button has the expected hover classes
    cy.get("[data-testid='view-all-features']")
      .should("have.class", "hover:bg-gradient-to-r")
      .and("have.class", "hover:from-[#4100a3]")
      .and("have.class", "hover:to-[#0d52ff]")
      .and("have.class", "hover:shadow-lg")
      .and("have.class", "hover:transition-all");
  });

  it("Feature section should not be there if features cards is missing", () => {
    // Pass an empty features array
    features = [];
    mount(<FeaturesSection features={features} />);
    // Expect that the component with data-testid "features-section" does not exist
    cy.get("[data-testid='features-section']").should("not.exist");
  });
});
